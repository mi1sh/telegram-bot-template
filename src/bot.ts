import {Telegraf, Context, Markup} from 'telegraf';
import * as dotenv from 'dotenv';
import { startCommand } from './commands/start';
import { socialsCommand } from './commands/socials';
import { suggestionCommand } from './commands/suggestion';
import { siteCommand } from './commands/site';
import { aboutCommand } from './commands/about';
import { handleUseAction, handleUseCommand } from './utils/helpers';
import {channelCommand} from './commands/channel';
import {playlistCommand} from './commands/playlist';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);
const CHAT_ID = process.env.CHAT_ID as string;

// Словарь для хранения состояния пользователей
const userStates: { [key: number]: string | undefined } = {};

// Команды и их обработчики
const commands = [
	{ command: 'start', handler: startCommand },
	{ command: 'socials', handler: socialsCommand },
	{ command: 'suggestion', handler: suggestionCommand },
	{ command: 'site', handler: siteCommand },
	{ command: 'about', handler: aboutCommand },
	{ command: 'channel', handler: channelCommand },
	{ command: 'playlist', handler: playlistCommand },
];

const mainMenuKeyboard = () => {
	return Markup.keyboard([
		[{ text: '📋Показать меню' }],  // Кнопка, которая отправляет команду /start
	])
		.resize()
		.oneTime(false);
}
mainMenuKeyboard();

// Функция для регистрации команд и действий
const registerCommandsAndActions = (bot: Telegraf<Context>) => {
	commands.forEach(({ command, handler }) => {
		bot.command(command, async (ctx) => {
			userStates[ctx.from.id] = command === 'suggestion' ? 'suggestion' : undefined;
			await handleUseCommand(ctx, handler);
		});

		bot.action(command, async (ctx) => {
			userStates[ctx.from.id] = command === 'suggestion' ? 'suggestion' : undefined;
			await handleUseAction(ctx, handler);
		});
	});
};

// Вызов функции для регистрации команд и действий
registerCommandsAndActions(bot);

// Кнопка "Назад" возвращает в главное меню
bot.action('back', async (ctx) => {
	userStates[ctx.from.id] = undefined; // Сбрасываем состояние
	await startCommand(ctx);
});

bot.hears('Показать меню', async (ctx: Context) => {
	await startCommand(ctx);
	if (ctx.from) {
		userStates[ctx.from.id] = undefined; // Сбрасываем состояние
	}
});

// Обработка сообщений пользователя
bot.on(['text', 'photo', 'audio'], async (ctx: Context) => {
	if (!ctx.from) {
		return;
	}
	const userState = userStates[ctx.from.id];

	if (userState === 'suggestion') {
		try {
			// Перенаправляем сообщение администратору
			await ctx.forwardMessage(CHAT_ID);
			await ctx.reply('Ваше сообщение отправлено!');

			// Возвращаем пользователя в главное меню
			await startCommand(ctx);
			if (ctx.from) {
				userStates[ctx.from.id] = undefined; // Сбрасываем состояние
			}
		} catch (error) {
			await ctx.reply('Произошла ошибка. Попробуйте позже.');
		}
	} else {
		await ctx.reply('Вы можете воспользоваться командой /suggestion для отправки сообщения или медиа.');
	}
});

bot.launch();
console.log('Бот запущен');

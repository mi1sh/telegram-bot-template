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

//? Creating a new bot using token from BotFather
const bot = new Telegraf(process.env.BOT_TOKEN as string);
const CHAT_ID = process.env.CHAT_ID as string;

//? This state using for "suggestion" flag:
const userStates: { [key: number]: string | undefined } = {};

//? U can add any of your new commands in this list
const commands = [
	{ command: 'start', handler: startCommand },
	{ command: 'socials', handler: socialsCommand },
	{ command: 'suggestion', handler: suggestionCommand },
	{ command: 'site', handler: siteCommand },
	{ command: 'about', handler: aboutCommand },
	{ command: 'channel', handler: channelCommand },
	{ command: 'playlist', handler: playlistCommand },
];

//? Create a button on the bottom of user viewport:
const mainMenuKeyboard = () => {
	console.log('show menu')
	return Markup.keyboard([
		[{ text: 'Показать меню 📔' }],
	])
		.resize()
		.oneTime(false);
}

bot.start(async (ctx) => {
	await ctx.reply('Привет! 🖖', mainMenuKeyboard());
	await startCommand(ctx);
});

bot.hears('Показать меню 📔', async (ctx) => {
	await startCommand(ctx);
	if (ctx.from) {
		userStates[ctx.from.id] = undefined;
	}
});

//? Register all actions and commands using our utils
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

registerCommandsAndActions(bot);

//? This is the handler for all "Back" buttons:
bot.action('back', async (ctx) => {
	userStates[ctx.from.id] = undefined;
	await startCommand(ctx);
});

//? This message handler support all Telegram message types:
bot.on('message', async (ctx: Context) => {
	if (!ctx.from) {
		return;
	}
	const userState = userStates[ctx.from.id];

	if (userState === 'suggestion') {
		try {
			await ctx.forwardMessage(CHAT_ID);
			await ctx.telegram.sendMessage(CHAT_ID, "Ты получил новое сообщение в предложку ⤴️");
			await ctx.reply('Ваше сообщение отправлено!');
			if (ctx.from) {
				userStates[ctx.from.id] = undefined;
			}
		} catch (error) {
			await ctx.reply('Произошла ошибка. Попробуйте позже.');
		}
	} else {
		await ctx.reply('Вы можете воспользоваться командой /suggestion для отправки сообщения или медиа.');
	}
});

bot.launch()
console.log('Bot is running');

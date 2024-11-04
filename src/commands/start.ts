import { Context, Markup } from 'telegraf';

export const startCommand = (ctx: Context) => {
	ctx.reply(
		'Меню:',
			Markup.inlineKeyboard([
				[Markup.button.callback('Предложка', 'suggestion')],
				[Markup.button.callback('Социальные сети', 'socials')],
				[Markup.button.callback('Канал', 'channel')],
				[Markup.button.callback('Плейлист', 'playlist')],
				[Markup.button.callback('Сайт админа', 'site')],
				[Markup.button.callback('О боте', 'about')],
			]),
	);
};

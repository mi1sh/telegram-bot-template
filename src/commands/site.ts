import { Context, Markup } from 'telegraf';
import * as dotenv from 'dotenv';

export const siteCommand = (ctx: Context) => {
	dotenv.config();

	const env = process.env;

	return ctx.reply(
		'Мой сайт:',
		Markup.inlineKeyboard([
			[Markup.button.url('Сайт', `${env.SITE_LINK}`)],
			[Markup.button.callback('Назад', 'back')],
		])
	);
};

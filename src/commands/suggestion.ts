// suggestion.ts
import { Context } from 'telegraf';
import * as dotenv from 'dotenv';
import { Markup } from 'telegraf';
dotenv.config();

export const suggestionCommand = async (ctx: Context) => {
	await ctx.reply(
		'Отправьте своё сообщение или медиа, и я передам это администратору.',
		Markup.inlineKeyboard([
			[Markup.button.callback('Назад', 'back')],
		])
	);
};

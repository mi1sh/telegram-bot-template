import { Context, Markup } from 'telegraf';
import {aboutMessage} from '../messages/aboutMessage';

export const aboutCommand = (ctx: Context) => {
	return ctx.reply(aboutMessage, {
		parse_mode: 'MarkdownV2',
		...Markup.inlineKeyboard([
			Markup.button.callback('Вернуться ↩️', 'back')
		])
	});
};

import { Context } from 'telegraf';
import {aboutMessage} from '../messages/aboutMessage';
import * as dotenv from 'dotenv';

export const aboutCommand = (ctx: Context) => {
	dotenv.config();
	const env = process.env;

	return ctx.reply(aboutMessage, {
		parse_mode: 'MarkdownV2',
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Посмотреть исходный код ↗️', url: `${env.GITHUB_REPO}` }],
				[{ text: "Вернуться ↩️", callback_data: 'back' }]
			]
		}
	});
};

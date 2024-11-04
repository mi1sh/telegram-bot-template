import { Context } from 'telegraf';
import * as dotenv from 'dotenv';
import {playlistMessage} from '../messages/playlistMessage';

export const playlistCommand = async (ctx: Context) => {
	dotenv.config();
	const env = process.env;

	await ctx.replyWithPhoto(
		{ url: `${env.PIC_PLAYLIST}` },
		{
			caption: playlistMessage,
			parse_mode: 'MarkdownV2',
			reply_markup: {
				inline_keyboard: [
					[{ text: "Вернуться назад", callback_data: 'back' }]
				]
			}
		}
	);
};

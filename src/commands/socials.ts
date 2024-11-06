import * as dotenv from 'dotenv';
import { Context, Markup } from 'telegraf';

export const socialsCommand = (ctx: Context) => {
	dotenv.config();

	const env = process.env;

	return ctx.reply(
		'*Соц.сети администратора:*',{
			parse_mode: 'MarkdownV2',
		...Markup.inlineKeyboard([
			[Markup.button.url('🔵 Telegram', `${env.TELEGRAM_LINK}`)],
			[Markup.button.url('🔴 Instagram', `${env.INSTAGRAM_LINK}`)],
			[Markup.button.url('⚪ TikTok', `${env.TIKTOK_LINK}`)],
			[Markup.button.url('🟢 Spotify', `${env.SPOTIFY_LINK}`)],
			[Markup.button.url('🟣 GitHub', `${env.GITHUB_LINK}`)],
			[Markup.button.url('⚫ Steam', `${env.STEAM_LINK}`)],
			[Markup.button.callback('Вернуться ↩️', 'back')],
		])
		}
	);
};

import * as dotenv from 'dotenv';
import { playlistMessage } from '../messages/playlistMessage';
export const playlistCommand = async (ctx) => {
    dotenv.config();
    const env = process.env;
    await ctx.replyWithPhoto({ url: `${env.PIC_PLAYLIST}` }, {
        caption: playlistMessage,
        parse_mode: 'MarkdownV2',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Послушать плейлист 🎧', url: `${env.SPOTIFY_PLAYLIST_LINK}` }],
                [{ text: "Вернуться ↩️", callback_data: 'back' }]
            ]
        }
    });
};

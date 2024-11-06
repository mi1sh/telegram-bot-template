import * as dotenv from 'dotenv';
import { channelMessage } from '../messages/channelMessage';
export const channelCommand = async (ctx) => {
    dotenv.config();
    const env = process.env;
    await ctx.replyWithPhoto({ url: `${env.PIC_CHANNEL}` }, {
        caption: channelMessage,
        parse_mode: 'MarkdownV2',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Перейти в канал ↗️', url: `${env.CHANNEL_LINK}` }],
                [{ text: "Вернуться ↩️", callback_data: 'back' }]
            ]
        }
    });
};

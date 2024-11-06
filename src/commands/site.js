import * as dotenv from 'dotenv';
import { siteMessage } from '../messages/siteMessage';
export const siteCommand = async (ctx) => {
    dotenv.config();
    const env = process.env;
    await ctx.replyWithPhoto({ url: `${env.PIC_SITE}` }, {
        caption: siteMessage,
        parse_mode: 'MarkdownV2',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Перейти на сайт ↗️", url: `${env.SITE_LINK}` }
                ],
                [
                    { text: "Вернуться ↩️", callback_data: 'back' }
                ]
            ],
        }
    });
};

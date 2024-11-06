import * as dotenv from 'dotenv';
import { Markup } from 'telegraf';
import { suggestionMessages } from '../messages/suggestionMessage';
dotenv.config();
export const suggestionCommand = async (ctx) => {
    await ctx.reply(suggestionMessages[0], {
        parse_mode: 'MarkdownV2'
    });
    await ctx.reply(suggestionMessages[1], {
        parse_mode: 'MarkdownV2',
        ...Markup.inlineKeyboard([
            Markup.button.callback('Вернуться ↩️', 'back')
        ])
    });
};

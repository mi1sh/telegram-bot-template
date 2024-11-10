"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialsCommand = void 0;
var dotenv = require("dotenv");
var telegraf_1 = require("telegraf");
var socialsCommand = function (ctx) {
    dotenv.config();
    var env = process.env;
    return ctx.reply('*Соц\\.сети администратора:*', __assign({ parse_mode: 'MarkdownV2' }, telegraf_1.Markup.inlineKeyboard([
        [telegraf_1.Markup.button.url('🔵 Telegram', "".concat(env.TELEGRAM_LINK))],
        [telegraf_1.Markup.button.url('🔴 Instagram', "".concat(env.INSTAGRAM_LINK))],
        [telegraf_1.Markup.button.url('⚪ TikTok', "".concat(env.TIKTOK_LINK))],
        [telegraf_1.Markup.button.url('🟢 Spotify', "".concat(env.SPOTIFY_LINK))],
        [telegraf_1.Markup.button.url('🟣 GitHub', "".concat(env.GITHUB_LINK))],
        [telegraf_1.Markup.button.url('⚫ Steam', "".concat(env.STEAM_LINK))],
        [telegraf_1.Markup.button.callback('Вернуться ↩️', 'back')],
    ])));
};
exports.socialsCommand = socialsCommand;

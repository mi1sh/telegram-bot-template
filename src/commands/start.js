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
exports.startCommand = void 0;
var telegraf_1 = require("telegraf");
var startCommand = function (ctx) {
    ctx.reply('*Выбери раздел в меню:*', __assign({ parse_mode: 'MarkdownV2' }, telegraf_1.Markup.inlineKeyboard([
        [telegraf_1.Markup.button.callback('📬 Предложка', 'suggestion')],
        [telegraf_1.Markup.button.callback('🕸️ Социальные сети', 'socials')],
        [telegraf_1.Markup.button.callback('📢 Канал', 'channel')],
        [telegraf_1.Markup.button.callback('📀 Плейлист', 'playlist')],
        [telegraf_1.Markup.button.callback('💻 Сайт админа', 'site')],
        [telegraf_1.Markup.button.callback('🤖 О боте', 'about')],
    ])));
};
exports.startCommand = startCommand;

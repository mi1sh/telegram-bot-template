"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutCommand = void 0;
var aboutMessage_1 = require("../messages/aboutMessage");
var dotenv = require("dotenv");
var aboutCommand = function (ctx) {
    dotenv.config();
    var env = process.env;
    return ctx.reply(aboutMessage_1.aboutMessage, {
        parse_mode: 'MarkdownV2',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Посмотреть исходный код ↗️', url: "".concat(env.GITHUB_REPO) }],
                [{ text: "Вернуться ↩️", callback_data: 'back' }]
            ]
        }
    });
};
exports.aboutCommand = aboutCommand;

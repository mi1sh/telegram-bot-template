"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistMessage = void 0;
var dotenv = require("dotenv");
dotenv.config();
var env = process.env;
exports.playlistMessage = "\uD83D\uDCC0 [*\u041F\u043B\u0435\u0439\u043B\u0438\u0441\u0442 \u043D\u0430\u0448\u0435\u0433\u043E \u043A\u0430\u043D\u0430\u043B\u0430*](".concat(env.SPOTIFY_PLAYLIST_LINK, ") \uD83D\uDCC0\n\n") +
    "\u0412 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \u043E\u0431\u0438\u0442\u0430\u0435\u0442 \u043C\u0443\u0437\u044B\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u043F\u043E\u0441\u0442\u0438\u0442\u0441\u044F \u0432 [_\u043A\u0430\u043D\u0430\u043B_](".concat(env.CHANNEL_LINK, ") \uD83C\uDFB6\n\n");

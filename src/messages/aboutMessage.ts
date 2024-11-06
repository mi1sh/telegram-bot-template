import * as dotenv from 'dotenv';

dotenv.config();
const env = process.env;

export const aboutMessage = `*Этот бот \\- мой личный небольшой проект, используйте его для обратной связи или предложений каналу [poplakat'](${env.CHANNEL_LINK})* 📨🤖\n\n` +
	`————————————————————\n\n` +
	`Я сделал исходный код бота открытым для чтения и использования, если вы хотите взять мой шаблон для написания своего бота, следуйте инструкции из [*репозитория на gitHub*](${env.GITHUB_REPO})\n\n` +
	`_\\(Не переживайте, это не так сложно, как может показаться на первый взгляд ☝️🤓\\)_ \n\n\n` +
	`\\- *Разработчик — [mi1sh](${env.TELEGRAM_LINK})*\n` +
	`\\- *Стек — [Typescript](https://www.typescriptlang.org/), [Node\\.js](https://nodejs.org/en), [Telegraf\\.js](https://telegraf.js.org/), [Telegram Bot API](https://core.telegram.org/bots/api)*\n` +
	`\\- *Версия — 1\\.0*`;


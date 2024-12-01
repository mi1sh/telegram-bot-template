import * as dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export const siteMessage = `*☝️🤓*\n` +
	`Вы можете более подробно ознакомиться с *моими работами* через [персональную страницу](${env.SITE_LINK}) ☕⌨️`

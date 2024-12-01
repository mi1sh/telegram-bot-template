import * as dotenv from 'dotenv';

dotenv.config();
const env = process.env;

export const channelMessage = `💧 [*poplakat'*](${env.CHANNEL_LINK}) 💧\n\n` +
	`*Канал, куда [админ](${env.TELEGRAM_LINK}) щитпостит музыку и пикчи на свой вкус*`

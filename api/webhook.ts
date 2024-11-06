import { VercelRequest, VercelResponse } from '@vercel/node';
import bot from '../src/bot';

export default async (req: VercelRequest, res: VercelResponse) => {
	if (req.method === 'POST') {
		try {
			await bot.handleUpdate(req.body);
			res.status(200).send('ok');
		} catch (error) {
			console.error('Webhook error:', error);
			res.status(500).send('Webhook error');
		}
	} else {
		res.status(200).send('Webhook is working');
	}
};

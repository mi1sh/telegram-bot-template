import bot from '../src/bot';
import {VercelRequest, VercelResponse} from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
	try {
		// Retrieve the POST request body that gets sent from Telegram
		const { body, query } = req

		if (query.setWebhook === "true") {
			const webhookUrl = `https://poplakat-bot.vercel.app/api/webhook`

			// Would be nice to somehow do this in a build file or something
			const isSet = await bot.telegram.setWebhook(webhookUrl)
			console.log(`Set webhook to ${webhookUrl}: ${isSet}`)
		}

			await bot.handleUpdate(body)
	} catch (error) {
		// If there was an error sending our message then we
		// can log it into the Vercel console
		console.error("Error sending message")
		console.log(error?.toString())
	}

	// Acknowledge the message with Telegram
	// by sending a 200 HTTP status code
	// The message here doesn't matter.
	res.status(200).send("OK")
}
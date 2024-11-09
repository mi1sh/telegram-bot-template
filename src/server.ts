import http, { IncomingMessage, ServerResponse } from 'http';
import bot from './bot';

const PORT = process.env.PORT || 3000;

const handlePostRequest = async (req: IncomingMessage, res: ServerResponse) => {
	try {
		let body = '';

		req.on('data', chunk => {
			body += chunk.toString();
		});

		req.on('end', async () => {
			try {
				const parsedBody = JSON.parse(body);
				await bot.handleUpdate(parsedBody);
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end('ok');
			} catch (error) {
				console.error('Webhook error:', error);
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Webhook error');
			}
		});

	} catch (error) {
		console.error('Error handling post request:', error);
		res.writeHead(500, { 'Content-Type': 'text/plain' });
		res.end('Internal server error');
	}
};

const handleGetRequest = (req: IncomingMessage, res: ServerResponse) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Bot is running');
};

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
	if (req.method === 'POST' && req.url === '/webhook') {
		handlePostRequest(req, res);
	} else if (req.method === 'GET' && req.url === '/') {
		handleGetRequest(req, res);
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

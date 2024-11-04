import { Context } from 'telegraf';

export const handleUseAction = async (ctx: Context, handler: (ctx: Context) => void) => {
	await handler(ctx);
};

export const handleUseCommand = async (ctx: Context, handler: (ctx: Context) => void) => {
	await handler(ctx);
};

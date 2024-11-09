import { Context } from 'telegraf';

//? In this file u can contain all of yours util functions, hooks and handlers

export const handleUseAction = async (ctx: Context, handler: (ctx: Context) => void) => {
	await handler(ctx);
};

export const handleUseCommand = async (ctx: Context, handler: (ctx: Context) => void) => {
	await handler(ctx);
};

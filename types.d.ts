import { Context } from 'telegraf';

interface MyContext extends Context {
	isInSuggestionMode?: boolean; // Добавляем свойство для отслеживания режима предложки
}

export default MyContext;

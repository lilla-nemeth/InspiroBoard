import type { contextMenuItem } from '../types/types';

export const createContextMenuItem = (args: contextMenuItem) => {
	const { contextList, text, styleId, styleClass } = args;

	const contextDelete = document.createElement('li');

	contextDelete.className = styleClass;
	contextDelete.id = styleId;
	contextDelete.textContent = text;

	contextList.appendChild(contextDelete);
};

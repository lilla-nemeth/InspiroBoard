import type { contextMenuItemArguments, deleteListItemArguments } from '../types/types';

const createContextMenuItem = (args: contextMenuItemArguments) => {
	const { contextList, text, styleId, styleClass } = args;

	const contextDelete = document.createElement('li');

	contextDelete.className = styleClass;
	contextDelete.id = styleId;
	contextDelete.textContent = text;

	contextList.appendChild(contextDelete);
};

const deleteListItem = (args: deleteListItemArguments) => {
	const { eventTarget } = args;

	if (eventTarget) {
		eventTarget.parentElement?.removeChild(eventTarget);
	}
};

export { createContextMenuItem, deleteListItem };

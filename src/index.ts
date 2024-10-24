'use strict';

import { createContextMenuItem, deleteItemFromDom, deleteItemFromArray, downloadCsv } from './utils/helpers';

const contentContainer = document.getElementById('content-container') as HTMLElement;

const todoList = document.createElement('ul');
todoList.id = 'todo-list';
todoList.className = 'todo-list';
contentContainer.appendChild(todoList);

const listItems = [
	{ id: 1, todo: 'Shopping' },
	{ id: 2, todo: 'Reading' },
	{ id: 3, todo: 'Cooking' },
	{ id: 4, todo: 'Running' },
];

for (let i = 0; i < listItems.length; i++) {
	const todoListElement = document.createElement('li');

	todoListElement.className = 'todo-element';
	todoListElement.id = `todo-element-${listItems[i].id}`;
	todoListElement.textContent = listItems[i].todo;
	todoListElement.setAttribute('data-id', listItems[i].id.toString());

	todoList.appendChild(todoListElement);
}

const contextMenu = document.createElement('div');
contextMenu.className = 'context-menu';

const contextList = document.createElement('ul');

createContextMenuItem({
	document: document,
	contextList: contextList,
	text: 'Delete',
	styleId: 'context-menu-delete',
	styleClass: 'context-menu-actions',
});

createContextMenuItem({
	document: document,
	contextList: contextList,
	text: 'Edit',
	styleId: 'context-menu-edit',
	styleClass: 'context-menu-actions',
});

createContextMenuItem({
	document: document,
	contextList: contextList,
	text: 'Export List to CSV',
	styleId: 'context-menu-csv',
	styleClass: 'context-menu-actions',
});

contextMenu.appendChild(contextList);
document.body.appendChild(contextMenu);

const addContextMenu = (e: MouseEvent) => {
	e.preventDefault();

	contextMenu.classList.add('visible');
	contextMenu.style.left = `${e.pageX}px`;
	contextMenu.style.top = `${e.pageY}px`;
};

const hideContextMenu = () => {
	contextMenu.classList.remove('visible');
};

let currentTarget: HTMLElement | null = null;

todoList.addEventListener('contextmenu', (e: MouseEvent) => {
	e.preventDefault();
	addContextMenu(e);
	currentTarget = e.target as HTMLElement;
});

document.addEventListener('click', (e: MouseEvent) => {
	const target = e.target as HTMLElement;

	switch (target.id) {
		case 'context-menu-edit':
			console.log('Edit');
			break;
		case 'context-menu-delete':
			if (currentTarget) {
				deleteItemFromArray({ eventTarget: currentTarget, arr: listItems });
				deleteItemFromDom({ eventTarget: currentTarget });
				currentTarget = null;
			}
			break;
		case 'context-menu-csv':
			downloadCsv({ array: listItems, filename: 'list.csv' });
			break;
		default:
			'';
	}

	hideContextMenu();
});

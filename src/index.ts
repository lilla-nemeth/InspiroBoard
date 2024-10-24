'use strict';

import { createContextMenuItem, deleteListItem } from './utils/helpers';

const todoList = document.getElementById('todo-list') as HTMLElement;

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

todoList.addEventListener('contextmenu', (e: MouseEvent) => {
	addContextMenu(e);
	const listTarget = e.target as HTMLElement;

	document.addEventListener('click', (e: MouseEvent) => {
		const target = e.target as HTMLElement;

		switch (target.id) {
			case 'context-menu-edit':
				console.log('Edit');
				break;
			case 'context-menu-delete':
				deleteListItem({ eventTarget: listTarget });
				break;
			default:
				'';
		}

		hideContextMenu();
	});
});

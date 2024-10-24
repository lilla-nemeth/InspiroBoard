'use strict';

import { createContextMenuItem } from './utils/helpers';

const todoList = <HTMLElement>document.getElementById('todo-list');
// const shopping = <HTMLElement>document.getElementById('shopping');
// const reading = <HTMLElement>document.getElementById('reading');
// const cooking = <HTMLElement>document.getElementById('cooking');
// const running = <HTMLElement>document.getElementById('running');

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

if (todoList) {
	todoList.addEventListener('contextmenu', addContextMenu);
}

document.addEventListener('click', hideContextMenu);

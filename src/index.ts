'use strict';

const todoList = <HTMLElement>document.getElementById('todo-list');
// const shopping = <HTMLElement>document.getElementById('shopping');
// const reading = <HTMLElement>document.getElementById('reading');
// const cooking = <HTMLElement>document.getElementById('cooking');
// const running = <HTMLElement>document.getElementById('running');

const contextMenu = document.createElement('div');
contextMenu.className = 'context-menu';

const contextList = document.createElement('ul');

const contextDelete = document.createElement('li');
contextDelete.className = 'context-menu-actions';
contextDelete.id = 'context-menu-delete';
contextDelete.textContent = 'Delete';
contextList.appendChild(contextDelete);

const contextEdit = document.createElement('li');
contextEdit.className = 'context-menu-actions';
contextEdit.id = 'context-menu-edit';
contextEdit.textContent = 'Edit';
contextList.appendChild(contextEdit);

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

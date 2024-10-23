'use strict';

const todoList = <HTMLElement>document.getElementById('todo-list');
// const shopping = <HTMLElement>document.getElementById('shopping');
// const reading = <HTMLElement>document.getElementById('reading');
// const cooking = <HTMLElement>document.getElementById('cooking');
// const running = <HTMLElement>document.getElementById('running');

const addCustomContextMenu = (e: MouseEvent) => {
	e.preventDefault();
	console.log('right-click');
};

if (todoList) {
	todoList.addEventListener('contextmenu', addCustomContextMenu);
}

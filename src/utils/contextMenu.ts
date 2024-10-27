import { createHtmlElement } from './helpers';

const createContextMenu = () => {
	const contextMenu = createHtmlElement({ el: 'div', elClassName: 'context-menu-wrapper', elId: 'context-menu-wrapper' });
	const list = createHtmlElement({ el: 'ul', elClassName: 'context-menu', elId: 'context-menu' });
	const contextMenuItems = [
		{ element: 'li', textContent: 'Delete', id: 'context-menu-delete', className: 'context-menu-actions' },
		{ element: 'li', textContent: 'Edit Text', id: 'context-menu-edit', className: 'context-menu-actions' },
		{ element: 'li', textContent: 'Export List to CSV', id: 'context-menu-csv', className: 'context-menu-actions' },
	];

	contextMenuItems.forEach((item) => {
		const contextMenuItem = createHtmlElement({
			el: item.element,
			elTextContent: item.textContent,
			elId: item.id,
			elClassName: item.className,
		});

		list.appendChild(contextMenuItem);
	});

	contextMenu.appendChild(list);

	return contextMenu;
};

const showContextMenu = (contextMenu: HTMLElement, e: MouseEvent | TouchEvent) => {
	let mouseX = e instanceof MouseEvent ? e.pageX : (e as TouchEvent).touches[0].pageX;
	let mouseY = e instanceof MouseEvent ? e.pageY : (e as TouchEvent).touches[0].pageY;

	const menuWidth = contextMenu.offsetWidth;
	const menuHeight = contextMenu.offsetHeight;

	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;

	if (mouseX + menuWidth > viewportWidth) {
		mouseX = viewportWidth - menuWidth;
	}

	if (mouseY + menuHeight > viewportHeight) {
		mouseY = viewportHeight - menuHeight;
	}

	contextMenu.style.display = 'block';
	contextMenu.style.left = `${mouseX}px`;
	contextMenu.style.top = `${mouseY}px`;
};

export { createContextMenu, showContextMenu };

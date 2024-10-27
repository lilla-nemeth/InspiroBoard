import { showContextMenu } from './contextMenu';
import { convertToCsv, deleteItemFromArray, deleteItemFromDom, downloadCsv, editItemInArray, editItemInDom } from './contextMenuActions';
import type { Image } from '../types/types';

let currentTarget: HTMLElement | null = null;

const handleContextMenu = (e: MouseEvent, contextMenu: HTMLElement) => {
	currentTarget = e.target as HTMLElement;

	if (currentTarget.closest('.image-wrapper')) {
		e.preventDefault();
		showContextMenu(contextMenu, e);
	}
};

const handleTouch = (e: TouchEvent, contextMenu: HTMLElement) => {
	currentTarget = e.target as HTMLElement;

	if (currentTarget.closest('.image-wrapper')) {
		e.preventDefault();
		const longPressTimer = setTimeout(() => {
			showContextMenu(contextMenu, e);
		}, 200);

		currentTarget.addEventListener('touchend', () => clearTimeout(longPressTimer), { once: true });
	}
};

const handleClick = (e: MouseEvent, contextMenu: HTMLElement, images: Image[]) => {
	const target = e.target as HTMLElement;

	if (currentTarget) {
		switch (target.id) {
			case 'context-menu-edit':
				editItemInDom({ eventTarget: currentTarget });
				editItemInArray({ eventTarget: currentTarget, arr: images });
				break;
			case 'context-menu-delete':
				deleteItemFromArray({ eventTarget: currentTarget, arr: images });
				deleteItemFromDom({ eventTarget: currentTarget, styleClass: '.image-wrapper' });
				break;
			case 'context-menu-csv':
				downloadCsv({ array: images, filename: 'list.csv', convertToCsv });
				break;
			default:
				'';
		}
		currentTarget = null;
	}

	contextMenu.style.display = 'none';
};

const handleKeyDown = (e: KeyboardEvent, contextMenu: HTMLElement) => {
	if (e.key === 'Escape' && contextMenu) {
		contextMenu.style.display = 'none';
	}
};

export { handleContextMenu, handleTouch, handleClick, handleKeyDown };

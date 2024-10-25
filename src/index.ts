'use strict';

import {
	createContextMenuItem,
	deleteItemFromDom,
	deleteItemFromArray,
	downloadCsv,
	editItemInDom,
	editItemInArray,
	mapImages,
} from './utils/helpers';

import { fetchImages } from './services/fetchImages';
import type { Image } from './types/types';

const contentContainer = document.getElementById('content-container') as HTMLElement;
let images: Image[] = [];

(async () => {
	try {
		images = await fetchImages();
		mapImages({ images, container: contentContainer });
	} catch (err) {
		console.log(err);
		throw new Error();
	}
})();

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
	text: 'Edit Text',
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

contentContainer.addEventListener('contextmenu', (e: MouseEvent) => {
	currentTarget = e.target as HTMLElement;

	if (currentTarget?.closest('.image-wrapper')) {
		e.preventDefault();
		addContextMenu(e);
	}
});

document.addEventListener('click', (e: MouseEvent) => {
	let target = e.target as HTMLElement;

	if (currentTarget) {
		switch (target.id) {
			case 'context-menu-edit':
				editItemInDom({ eventTarget: currentTarget });
				editItemInArray({ eventTarget: currentTarget!, arr: images });
				currentTarget = null;
				break;
			case 'context-menu-delete':
				deleteItemFromArray({ eventTarget: currentTarget, arr: images });
				deleteItemFromDom({ eventTarget: currentTarget, styleClass: '.image-wrapper' });
				currentTarget = null;
				break;
			case 'context-menu-csv':
				downloadCsv({ array: images, filename: 'list.csv' });
				break;
			default:
				'';
		}
	}

	hideContextMenu();
});

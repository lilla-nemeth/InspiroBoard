'use strict';

import {
	deleteItemFromDom,
	deleteItemFromArray,
	downloadCsv,
	editItemInDom,
	editItemInArray,
	mapImages,
	createContextMenu,
	showContextMenu,
	hideContextMenu,
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

const contextMenu = createContextMenu();

document.body.appendChild(contextMenu);

let currentTarget: HTMLElement | null = null;

contentContainer.addEventListener('contextmenu', (e: MouseEvent) => {
	currentTarget = e.target as HTMLElement;

	if (currentTarget.closest('.image-wrapper')) {
		showContextMenu(contextMenu, e);
	}
});

document.addEventListener('click', (e: MouseEvent) => {
	let target = e.target as HTMLElement;

	if (currentTarget) {
		switch (target.id) {
			case 'context-menu-edit':
				editItemInDom({ eventTarget: currentTarget });
				editItemInArray({ eventTarget: currentTarget, arr: images });
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

	hideContextMenu(contextMenu);
});

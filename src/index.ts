'use strict';

import { fetchImages } from './services/fetchImages';
import type { Image } from './types/types';
import { mapImages } from './utils/images';
import { createContextMenu } from './utils/contextMenu';
import { handleClick, handleTouch, handleContextMenu, handleKeyDown } from './utils/eventHandlers';

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

contentContainer.addEventListener('contextmenu', (e: MouseEvent) => handleContextMenu(e, contextMenu));
contentContainer.addEventListener('touchstart', (e: TouchEvent) => handleTouch(e, contextMenu));

document.addEventListener('click', (e: MouseEvent) => handleClick(e, contextMenu, images));
document.addEventListener('keydown', (e: KeyboardEvent) => handleKeyDown(e, contextMenu));

import type { MapImagesArgs, Image } from '../types/types';
import { createHtmlElement } from './helpers';

const fetchOriginalUrls = async (img: Image) => {
	try {
		const response = await fetch(img.url);

		if (response.ok) {
			img.url = response.url;
		}
	} catch (error) {
		console.error('Failed to fetch original image URLs', error);
	}
};

const createImageContent = (img: Image) => {
	const imgWrapper = createHtmlElement({ el: 'div', elClassName: 'image-wrapper', elId: `image-text-${img.id}` });
	imgWrapper.setAttribute('data-id', img.id.toString());

	const imgElement = createHtmlElement({ el: 'img', elClassName: 'image', elLoading: 'lazy', elSrc: img.url });
	const imgTextContainer = createHtmlElement({ el: 'div', elClassName: 'image-text-container' });
	const imgText = createHtmlElement({ el: 'p', elClassName: 'image-text', elTextContent: img.text });

	imgWrapper.appendChild(imgElement);
	imgWrapper.appendChild(imgTextContainer);
	imgTextContainer.appendChild(imgText);

	return imgWrapper;
};

const mapImages = async (args: MapImagesArgs) => {
	const { images, container } = args;

	await Promise.all(images.map(fetchOriginalUrls));

	const imgsContainer = createHtmlElement({ el: 'div', elClassName: 'image-container' });

	images.forEach((img) => {
		const image = createImageContent(img);
		imgsContainer.appendChild(image);
	});

	container.appendChild(imgsContainer);
};

export { mapImages };

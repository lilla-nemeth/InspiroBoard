import type {
	ContextMenuItemArgs,
	ConvertToCsvArgs,
	DeleteItemFromDomArgs,
	DeleteItemFromArrayArgs,
	DownloadCsvArgs,
	EditItemInDomArgs,
	EditItemInArrayArgs,
	FindCurrentItemArgs,
	MapImagesArgs,
	MapTextsArgs,
} from '../types/types';

const fetchOriginalUrls = async (img: any) => {
	try {
		const response = await fetch(img.url);
		if (response.ok) {
			img.url = response.url;
		}
	} catch (error) {
		console.error('Failed to fetch original URLs', error);
	}
};

const mapTexts = (args: MapTextsArgs) => {
	const { images } = args;
};

const mapImages = async (args: MapImagesArgs) => {
	const { images, container } = args;

	await Promise.all(images.map(fetchOriginalUrls));

	const imgs = images.map((img) => {
		const imgWrapper = document.createElement('div');
		imgWrapper.className = 'image-wrapper';
		imgWrapper.id = `image-text-${img.id}`;
		imgWrapper.setAttribute('data-id', img.id.toString());

		const imgElement = document.createElement('img');
		imgElement.className = 'image';
		imgElement.loading = 'lazy';
		imgElement.src = img.url;

		const imgTextContainer = document.createElement('div');
		imgTextContainer.className = 'image-text-container';

		const imgText = document.createElement('p');
		imgText.className = 'image-text';
		imgText.textContent = img.text;

		imgWrapper.appendChild(imgElement);
		imgWrapper.appendChild(imgTextContainer);
		imgTextContainer.appendChild(imgText);
		return imgWrapper;
	});

	const imgsContainer = document.createElement('div');
	imgsContainer.className = 'image-container';

	imgs.forEach((img) => {
		imgsContainer.appendChild(img);
	});

	container.appendChild(imgsContainer);
};

const createContextMenuItem = (args: ContextMenuItemArgs) => {
	const { contextList, text, styleId, styleClass } = args;

	const contextDelete = document.createElement('li');

	contextDelete.className = styleClass;
	contextDelete.id = styleId;
	contextDelete.textContent = text;

	contextList.appendChild(contextDelete);
};

const findCurrentItem = (args: FindCurrentItemArgs) => {
	const { eventTarget, arr } = args;

	const parentWrapper = eventTarget.closest('.image-wrapper') as HTMLElement | null;

	if (parentWrapper) {
		const itemId = parentWrapper.dataset?.id;
		const currentItem = arr.find((item) => item.id === Number(itemId));

		return currentItem;
	}
};

const deleteItemFromDom = (args: DeleteItemFromDomArgs) => {
	const { eventTarget, styleClass } = args;

	const parentWrapper = eventTarget?.closest(styleClass) as HTMLElement | null;

	parentWrapper?.remove();
};

const deleteItemFromArray = (args: DeleteItemFromArrayArgs) => {
	const { eventTarget, arr } = args;

	const currentItem = findCurrentItem({ eventTarget, arr });

	if (currentItem) {
		const index = arr.indexOf(currentItem);

		if (index > -1) {
			arr.splice(index, 1);
		}
	}
};

const editItemInDom = (args: EditItemInDomArgs) => {
	return new Promise((resolve) => {
		const { eventTarget } = args;

		const parentWrapper = eventTarget.closest('.image-wrapper') as HTMLElement | null;

		if (parentWrapper) {
			const imageTextContainer = parentWrapper.querySelector('.image-text-container') as HTMLElement;
			const imageText = parentWrapper.querySelector('.image-text') as HTMLElement;
			const text = imageText.textContent;

			// Creating Input
			const input = document.createElement('input');
			input.type = 'text';
			input.value = text as string;
			input.className = 'image-input';

			imageText.style.display = 'none';
			imageText.innerHTML = input.value;
			imageTextContainer.appendChild(input);

			input.focus();
			input.select();

			input.addEventListener('blur', (e) => {
				const newText = input.value.trim();

				if (newText) {
					imageText.textContent = newText;
				}

				input.remove();
				resolve(newText);
			});

			input.addEventListener('change', (e) => {
				if (e.target !== imageText) {
					imageText.style.display = 'block';
				}
			});

			input.addEventListener('keypress', (e) => {
				if (e.key === 'Enter') {
					input.blur();
				}
			});
		}
	});
};

const editItemInArray = async (args: EditItemInArrayArgs) => {
	const { eventTarget, arr } = args;

	const currentItem = findCurrentItem({ eventTarget, arr });

	if (currentItem) {
		const index = arr.indexOf(currentItem);

		if (index > -1) {
			const updatedText: string = (await editItemInDom({ eventTarget })) as string;

			arr[index].text = updatedText;
		}
	}
};

const convertToCsv = (args: ConvertToCsvArgs) => {
	const { arr } = args;

	const headers = Object.keys(arr[0]).join(',');
	const rows = arr.map((el) => Object.values(el).join(','));

	return [headers, ...rows].join('\n');
};

const downloadCsv = (args: DownloadCsvArgs) => {
	const { array, filename } = args;

	const data = convertToCsv({ arr: array });

	const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
	const url = URL.createObjectURL(blob);

	let a = document.createElement('a');
	a.setAttribute('download', filename);
	a.href = url;
	a.click();
	URL.revokeObjectURL(url);
};

export { mapImages, createContextMenuItem, deleteItemFromDom, deleteItemFromArray, editItemInDom, editItemInArray, downloadCsv };

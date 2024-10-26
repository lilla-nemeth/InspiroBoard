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
	CreateHtmlElementArgs,
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

const createHtmlElement = (args: CreateHtmlElementArgs) => {
	const { el, elClassName, elId, elTextContent, elLoading, elSrc } = args;

	const element = document.createElement(el) as HTMLElement;

	// Optional attributes:
	Object.assign(element, {
		className: elClassName || undefined,
		id: elId || undefined,
		textContent: elTextContent || undefined,
		loading: elLoading || undefined,
		src: elSrc || undefined,
	});

	return element;
};

const mapImages = async (args: MapImagesArgs) => {
	const { images, container } = args;

	await Promise.all(images.map(fetchOriginalUrls));

	const imgs = images.map((img) => {
		const imgWrapper = createHtmlElement({ el: 'div', elClassName: 'image-wrapper', elId: `image-text-${img.id}` });
		imgWrapper.setAttribute('data-id', img.id.toString());

		const imgElement = createHtmlElement({ el: 'img', elClassName: 'image', elLoading: 'lazy', elSrc: img.url });
		const imgTextContainer = createHtmlElement({ el: 'div', elClassName: 'image-text-container' });
		const imgText = createHtmlElement({ el: 'p', elClassName: 'image-text', elTextContent: img.text });

		imgWrapper.appendChild(imgElement);
		imgWrapper.appendChild(imgTextContainer);
		imgTextContainer.appendChild(imgText);

		return imgWrapper;
	});

	const imgsContainer = createHtmlElement({ el: 'div', elClassName: 'image-container' });

	imgs.forEach((img) => {
		imgsContainer.appendChild(img);
	});

	container.appendChild(imgsContainer);
};

const createContextMenuItem = (args: ContextMenuItemArgs) => {
	const { contextList, text, styleId, styleClass } = args;

	const contextDelete = createHtmlElement({ el: 'li', elClassName: styleClass, elId: styleId, elTextContent: text });

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
			const textarea = document.createElement('textarea');
			textarea.rows = 4;
			// textarea.cols = 50;
			textarea.maxLength = 85;
			textarea.className = 'image-textarea';
			textarea.value = text as string;

			imageText.innerHTML = textarea.value;
			imageTextContainer.appendChild(textarea);

			textarea.focus();
			textarea.select();
			imageText.style.display = 'none';

			textarea.addEventListener('blur', (e) => {
				const newText = textarea.value.trim();

				if (newText) {
					imageText.textContent = newText;
				}

				textarea.remove();
				imageText.style.display = 'block';
				resolve(newText);
			});

			textarea.addEventListener('keypress', (e) => {
				if (e.key === 'Enter') {
					textarea.blur();
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

import type {
	ConvertToCsvArgs,
	CreateTextareaArgs,
	DeleteItemFromArrayArgs,
	DeleteItemFromDomArgs,
	DownloadCsvArgs,
	EditItemInArrayArgs,
	EditItemInDomArgs,
	FindCurrentItemArgs,
} from '../types/types';

const findCurrentItem = (args: FindCurrentItemArgs) => {
	const { eventTarget, arr } = args;

	const parentWrapper = eventTarget.closest('.image-wrapper') as HTMLElement | null;

	if (parentWrapper) {
		const itemId = parentWrapper.dataset?.id;
		return arr.find((item) => item.id === Number(itemId));
	}
};

// Delete item
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

const createTextarea = (args: CreateTextareaArgs): HTMLTextAreaElement => {
	const { rowNumber, lengthNumber, className, text } = args;

	const textarea = document.createElement('textarea');
	textarea.rows = rowNumber;
	textarea.maxLength = lengthNumber;
	textarea.className = className;
	textarea.value = text as string;

	return textarea;
};

// Editing text
const editItemInDom = (args: EditItemInDomArgs) => {
	return new Promise((resolve) => {
		const { eventTarget } = args;

		const parentWrapper = eventTarget.closest('.image-wrapper') as HTMLElement | null;

		if (parentWrapper) {
			const imageTextContainer = parentWrapper.querySelector('.image-text-container') as HTMLElement;
			const imageText = parentWrapper.querySelector('.image-text') as HTMLElement;
			const text = imageText.textContent;
			const textarea = createTextarea({ rowNumber: 4, lengthNumber: 85, className: 'image-textarea', text: text });

			imageText.innerHTML = textarea.value;
			imageTextContainer.appendChild(textarea);

			textarea.focus();
			textarea.select();

			imageText.style.display = 'none';

			textarea.addEventListener('blur', () => {
				const newText = textarea.value.trim();

				if (newText) {
					imageText.textContent = newText;
				}

				imageText.style.display = 'block';
				textarea.remove();
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

// Creating and exporting CSV file
const convertToCsv = (args: ConvertToCsvArgs) => {
	const { arr } = args;

	const headers = Object.keys(arr[0]).join(',');
	const rows = arr.map((el) => Object.values(el).join(','));

	return [headers, ...rows].join('\n');
};

const downloadCsv = (args: DownloadCsvArgs) => {
	const { array, filename, convertToCsv } = args;

	const data = convertToCsv({ arr: array });

	const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
	const url = URL.createObjectURL(blob);

	let a = document.createElement('a');
	a.setAttribute('download', filename);
	a.href = url;
	a.click();
	URL.revokeObjectURL(url);
};

export { deleteItemFromDom, deleteItemFromArray, editItemInDom, editItemInArray, convertToCsv, downloadCsv };

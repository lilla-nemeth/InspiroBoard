import type {
	ContextMenuItemArgs,
	ConvertToCsvArgs,
	DeleteItemFromDomArgs,
	DeleteItemFromArrayArgs,
	DownloadCsvArgs,
	EditItemInDomArgs,
	EditItemInArrayArgs,
	FindCurrentItemArgs,
} from '../types/types';

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

	const elId = eventTarget.dataset.id;
	const currentItem = arr.find((item) => item.id === Number(elId));

	return currentItem;
};

const deleteItemFromDom = (args: DeleteItemFromDomArgs) => {
	const { eventTarget } = args;

	eventTarget?.parentElement?.removeChild(eventTarget);
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

		let text = eventTarget.textContent;

		const input = document.createElement('input');
		input.type = 'text';
		input.value = text || '';

		eventTarget.textContent = '';
		eventTarget.appendChild(input);

		input.focus();

		input.addEventListener('keypress', (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				input.blur();
			}
		});

		input.addEventListener('blur', () => {
			const newText = input.value.trim();

			if (text !== newText) {
				eventTarget.textContent = newText;
			}
			resolve(newText);
		});
	});
};

const editItemInArray = async (args: EditItemInArrayArgs) => {
	const { eventTarget, arr } = args;

	const currentItem = findCurrentItem({ eventTarget, arr });

	if (currentItem) {
		const index = arr.indexOf(currentItem);

		if (index > -1) {
			const updatedText = await editItemInDom({ eventTarget });
			
			if (updatedText !== arr[index].todo) {
				arr[index].todo = updatedText;
			}
		}
	}
};

const convertToCsv = (args: ConvertToCsvArgs) => {
	const { arr } = args;

	const array = [Object.keys(arr[0])].concat(arr);

	return array
		.map((item) => {
			return Object.values(item).toString();
		})
		.join('\n');
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

export { createContextMenuItem, deleteItemFromDom, deleteItemFromArray, editItemInDom, editItemInArray, downloadCsv };

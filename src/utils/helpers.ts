import type { ContextMenuItemArgs, ConvertToCsvArgs, DeleteItemFromDomArgs, DeleteItemFromArrayArgs, DownloadCsvArgs } from '../types/types';

const createContextMenuItem = (args: ContextMenuItemArgs) => {
	const { contextList, text, styleId, styleClass } = args;

	const contextDelete = document.createElement('li');

	contextDelete.className = styleClass;
	contextDelete.id = styleId;
	contextDelete.textContent = text;

	contextList.appendChild(contextDelete);
};

const deleteItemFromDom = (args: DeleteItemFromDomArgs) => {
	const { eventTarget } = args;

	eventTarget?.parentElement?.removeChild(eventTarget);
};

const deleteItemFromArray = (args: DeleteItemFromArrayArgs) => {
	const { eventTarget, arr } = args;

	const elId = eventTarget.dataset.id;
	const itemToRemove = arr.find((item) => item.id === Number(elId));

	if (itemToRemove) {
		const index = arr.indexOf(itemToRemove);

		if (index > -1) {
			arr.splice(index, 1);
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

export { createContextMenuItem, deleteItemFromDom,deleteItemFromArray, downloadCsv };

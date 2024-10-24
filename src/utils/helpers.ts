import type { ContextMenuItemArgs, ConvertToCsvArgs, DeleteListItemArgs, DownloadCsvArgs } from '../types/types';

const createContextMenuItem = (args: ContextMenuItemArgs) => {
	const { contextList, text, styleId, styleClass } = args;

	const contextDelete = document.createElement('li');

	contextDelete.className = styleClass;
	contextDelete.id = styleId;
	contextDelete.textContent = text;

	contextList.appendChild(contextDelete);
};

const deleteListItem = (args: DeleteListItemArgs) => {
	const { eventTarget } = args;

	eventTarget?.parentElement?.removeChild(eventTarget);
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
};

export { createContextMenuItem, deleteListItem, downloadCsv };

interface ContextMenuItemArgs {
	document: Document;
	contextList: HTMLUListElement;
	text: string;
	styleId: string;
	styleClass: string;
}

interface DeleteItemFromDomArgs {
	eventTarget: HTMLElement;
}

interface DeleteItemFromArrayArgs {
	eventTarget: HTMLElement;
	arr: ListItem<string>[];
}

interface ConvertToCsvArgs {
	arr: ListItem<string>[];
}

interface ListItem {
	todo: string;
}

interface DownloadCsvArgs {
	array: ListItem<string>[];
	filename: string;
}

export type { ContextMenuItemArgs, DeleteItemFromDomArgs, DeleteItemFromArrayArgs, ConvertToCsvArgs, DownloadCsvArgs };

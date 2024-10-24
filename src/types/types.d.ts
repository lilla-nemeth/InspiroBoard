interface ContextMenuItemArgs {
	document: Document;
	contextList: HTMLUListElement;
	text: string;
	styleId: string;
	styleClass: string;
}

interface DeleteListItemArgs {
	styleId?: string;
	eventTarget: HTMLElement;
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

export type { ContextMenuItemArgs, DeleteListItemArgs, ConvertToCsvArgs, DownloadCsvArgs };

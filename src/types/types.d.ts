interface MapTextsArgs {
	images: Image[];
}

interface MapImagesArgs {
	images: Image[];
	container: HTMLElement;
}

interface Image {
	id: number;
	url: string;
	text: string;
}

interface ContextMenuItemArgs {
	document: Document;
	contextList: HTMLUListElement;
	text: string;
	styleId: string;
	styleClass: string;
}

interface FindCurrentItemArgs {
	eventTarget: HTMLElement;
	arr: ListItem<string>[];
}

interface DeleteItemFromDomArgs {
	eventTarget: HTMLElement;
	styleClass: string;
}

interface DeleteItemFromArrayArgs {
	eventTarget: HTMLElement;
	arr: ListItem<string>[];
}

interface EditItemInDomArgs {
	eventTarget: HTMLElement;
}

interface EditItemInArrayArgs {
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

export type {
	Image,
	MapTextsArgs,
	MapImagesArgs,
	ContextMenuItemArgs,
	DeleteItemFromDomArgs,
	DeleteItemFromArrayArgs,
	EditItemInDomArgs,
	EditItemInArrayArgs,
	ConvertToCsvArgs,
	DownloadCsvArgs,
	FindCurrentItemArgs,
};

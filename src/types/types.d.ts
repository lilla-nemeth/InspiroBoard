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
	arr: Image[];
}

interface DeleteItemFromDomArgs {
	eventTarget: HTMLElement;
	styleClass: string;
}

interface DeleteItemFromArrayArgs {
	eventTarget: HTMLElement;
	arr: Image[];
}

interface EditItemInDomArgs {
	eventTarget: HTMLElement;
}

interface EditItemInArrayArgs {
	eventTarget: HTMLElement;
	arr: Image[];
}

interface ConvertToCsvArgs {
	arr: Image[];
}

interface DownloadCsvArgs {
	array: Image[];
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

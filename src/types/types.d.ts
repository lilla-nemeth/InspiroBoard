type DomElementAttribute = string;

interface CreateHtmlElementArgs {
	el: DomElementAttribute;
	elClassName?: DomElementAttribute;
	elId?: DomElementAttribute;
	elTextContent?: DomElementAttribute;
	elLoading?: DomElementAttribute;
	elSrc?: DomElementAttribute;
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

interface CreateTextareaArgs {
	rowNumber: number;
	lengthNumber: number;
	className: string;
	text: string | null;
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
	convertToCsv: (args: ConvertToCsvArgs) => string;
}

export type {
	Image,
	CreateHtmlElementArgs,
	MapImagesArgs,
	DeleteItemFromDomArgs,
	DeleteItemFromArrayArgs,
	CreateTextareaArgs,
	EditItemInDomArgs,
	EditItemInArrayArgs,
	ConvertToCsvArgs,
	DownloadCsvArgs,
	FindCurrentItemArgs,
};

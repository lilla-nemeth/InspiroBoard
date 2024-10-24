interface contextMenuItemArguments {
	document: Document;
	contextList: HTMLUListElement;
	text: string;
	styleId: string;
	styleClass: string;
}

interface deleteListItemArguments {
	styleId?: string;
	eventTarget: HTMLElement;
}

export type { contextMenuItemArguments, deleteListItemArguments };

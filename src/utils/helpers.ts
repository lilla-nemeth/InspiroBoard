import type { CreateHtmlElementArgs } from '../types/types';

// for most HTMLElement creation
const createHtmlElement = (args: CreateHtmlElementArgs) => {
	const { el, elClassName, elId, elTextContent, elLoading, elSrc } = args;

	const element = document.createElement(el);

	// Optional attributes:
	Object.assign(element, {
		className: elClassName || '',
		id: elId || '',
		textContent: elTextContent || '',
		loading: elLoading || '',
		src: elSrc || '',
	});

	return element;
};

export { createHtmlElement };

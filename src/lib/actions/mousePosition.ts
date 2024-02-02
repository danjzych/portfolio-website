'use strict';

import { cursorCoordinates } from '../../stores';

function setCoordinates(e: MouseEvent) {
	cursorCoordinates.set({ x: e.clientX, y: e.clientY });
}

export default function mousePosition(element: HTMLElement) {
	element.addEventListener('mousemove', setCoordinates);

	return {
		destroy() {
			element.removeEventListener('mousemove', setCoordinates);
		},
	};
}

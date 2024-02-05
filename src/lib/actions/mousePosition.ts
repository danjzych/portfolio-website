'use strict';

import { cursorCoordinates } from '../../stores';

function setCoordinates(e: MouseEvent) {
	cursorCoordinates.set({ x: e.clientX, y: e.clientY });
}

export default function mousePosition(element: HTMLElement) {
	window.addEventListener('mousemove', setCoordinates);

	return {
		destroy() {
			window.removeEventListener('mousemove', setCoordinates);
		},
	};
}

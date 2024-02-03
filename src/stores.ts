'use strict';

import { writable } from 'svelte/store';
import { spring } from 'svelte/motion';

export const viewportWidth = writable<number>();

interface Coordinates {
	x: number;
	y: number;
}

export const cursorCoordinates = spring<Coordinates>(
	{ x: 0, y: 0 },
	{
		stiffness: 0.15,
		damping: 0.33,
	},
);

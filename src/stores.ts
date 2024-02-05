'use strict';

import { writable } from 'svelte/store';
import { spring } from 'svelte/motion';

interface Viewport {
	width: number;
	height: number;
}

export const viewport = writable<Viewport>({ width: 0, height: 0 });

type Coordinates = {
	x: number;
	y: number;
};

export const cursorCoordinates = spring<Coordinates>(
	{ x: 0, y: 0 },
	{
		stiffness: 0.15,
		damping: 0.33,
	},
);

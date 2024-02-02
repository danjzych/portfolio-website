'use strict';

import { writable } from 'svelte/store';
import { spring } from 'svelte/motion';

export const viewportWidth = writable<number>();

interface Coordinates {
	x: number;
	y: number;
}

export const cursorCoordinates = spring<Coordinates>();

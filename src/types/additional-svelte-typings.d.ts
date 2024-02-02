'use strict';

declare namespace svelteHTML {
	/**
	 * this allows for the use of the custom action and event,
	 * and corresponding event listener, found in lib/useIntersectionObserver.ts
	 */
	interface HTMLAttributes {
		'on:enterView'?: (event: any) => void;
	}
}

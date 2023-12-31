'use strict';

let observer: IntersectionObserver;

function createIntersectionObserver() {
	observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.dispatchEvent(new CustomEvent('enterView'));
				}
			}
		},
		{ threshold: 0.5 },
	);
}

export default function useIntersectionObserver(element: HTMLElement) {
	if (!observer) {
		createIntersectionObserver();
	}

	observer.observe(element);

	return {
		destroy() {
			observer.disconnect();
		},
	};
}

'use strict';

/** Scroll to section based on id. To be used on anchor tags with id's. */
export function scrollToSection(evt) {
	const sectionId = evt.target.getAttribute('href');
	const selectedSection = document.querySelector(sectionId);

	if (selectedSection) {
		selectedSection.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
}

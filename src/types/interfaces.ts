'use strict';

export interface Experience {
	company: {
		name: string;
		//later make a url type and extend
		link?: string;
	};
	position: {
		title: string;
		start_date: string;
		end_date: string;
	};
}

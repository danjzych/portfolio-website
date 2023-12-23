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
		description: string[];
	};
}

export interface Project {
	title: string;
	//later make an image url type and extend
	link: string;
	description: string;
	image: string;
	technologies: string[];
}

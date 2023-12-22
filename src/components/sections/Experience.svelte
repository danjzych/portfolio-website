<script lang="ts">
	import type { Experience } from '../../types/interfaces';
	import ToggleBar from '../ToggleBar.svelte';
	import ExperienceItem from '../ExperienceItem.svelte';

	const EXPERIENCE: Experience[] = [
		{
			company: {
				name: 'Foqal',
			},
			position: {
				title: 'Software Engineer Intern',
				start_date: 'October 2023',
				end_date: 'November 23',
			},
		},
		{
			company: { name: 'Freelance' },
			position: {
				title: 'Touring Musician and Record Producer',
				start_date: 'February 22',
				end_date: 'August 23',
			},
		},
		{
			company: { name: 'Rentable' },
			position: {
				title: 'Product Manager',
				start_date: 'November 2020',
				end_date: 'May 22',
			},
		},
		{
			company: { name: 'Rentable' },
			position: {
				title: 'Property Research Manager',
				start_date: 'April 2018',
				end_date: 'November 2020',
			},
		},
	];

	let selectedIdx = 0;
</script>

<section
	id="experience"
	class="flex min-h-screen min-w-full flex-col items-center justify-center"
>
	<div class="w-3/5">
		<h2 class="pb-6 text-3xl font-semibold">Experience & Education</h2>
		<div class="w-inherit grid grid-cols-6 gap-4">
			<ToggleBar items={EXPERIENCE} bind:selected={selectedIdx} />
			<ExperienceItem experience={EXPERIENCE[selectedIdx]} />
		</div>
	</div>
</section>

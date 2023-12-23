<script lang="ts">
	import type { Experience } from '../../types/interfaces';
	import ToggleBar from '../ToggleBar.svelte';
	import ExperienceItem from '../ExperienceItem.svelte';
	import EXPERIENCE from '$lib/content/experience.json';
	import { scrollToSection } from '$lib/utils';

	const experiences: Experience[] = EXPERIENCE;

	let selectedIdx = 0;

	let visible = true;

	$: if (selectedIdx) {
		visible = false;

		console.log('test');
		setTimeout(() => {
			visible = true;
		}, 275);
	}
</script>

<section
	id="experience"
	class="flex min-h-screen min-w-full flex-col items-center"
>
	<div class="mt-40 w-3/5">
		<h2 class="pb-6 text-3xl font-semibold">
			<a href="#experience" on:click|preventDefault={scrollToSection}
				>Experience & Education</a
			>
		</h2>
		<div class="w-inherit grid grid-cols-6 gap-4">
			<ToggleBar items={experiences} bind:selected={selectedIdx} />
			{#if visible}
				<ExperienceItem experience={experiences[selectedIdx]} />
			{/if}
		</div>
	</div>
</section>

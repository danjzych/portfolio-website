<script lang="ts">
	import { blur } from 'svelte/transition';
	import type { Experience } from '../../types/interfaces';
	import ToggleBar from '../ToggleBar.svelte';
	import ExperienceItem from '../ExperienceItem.svelte';
	import EXPERIENCE from '$lib/content/experience.json';
	import { scrollToSection } from '$lib/utils';
	import useIntersectionObserver from '$lib/useIntersectionObserver';

	const experiences: Experience[] = EXPERIENCE;

	let selectedIdx = 0;

	let visible = true;
	let inView = false;

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
	use:useIntersectionObserver
	on:enterView={() => (inView = true)}
>
	<div class="mt-40 w-3/5">
		<h2 class="pb-6 text-3xl font-semibold">
			<a href="#experience" on:click|preventDefault={scrollToSection}
				>Experience & Education</a
			>
		</h2>
		{#if inView}
			<div
				class="w-inherit grid grid-cols-6 gap-4"
				transition:blur={{ delay: 200, duration: 400 }}
			>
				<ToggleBar items={experiences} bind:selected={selectedIdx} />
				{#if visible}
					<ExperienceItem experience={experiences[selectedIdx]} />
				{/if}
			</div>
		{/if}
	</div>
</section>

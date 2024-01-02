<script lang="ts">
	import { blur } from 'svelte/transition';
	import { viewportWidth } from '../../stores';
	import type { Experience } from '../../types/interfaces';
	import { Breakpoints } from '../../types/types';
	import ToggleBar from '../ToggleBar.svelte';
	import ExperienceItem from '../ExperienceItem.svelte';
	import Resume from '../Resume.svelte';
	import EXPERIENCE from '$lib/content/experience.json';
	import { scrollToSection } from '$lib/utils';
	import useIntersectionObserver from '$lib/useIntersectionObserver';

	const experiences: Experience[] = EXPERIENCE;

	let selectedIdx = 0;

	let visible = true;
	let inView = false;
	let showResume = false;

	$: if (selectedIdx) {
		visible = false;

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
	<div class="mt-40 px-4 md:w-3/5 md:px-0">
		<h2
			class="flex items-center justify-between pb-6 text-3xl font-semibold"
		>
			<a href="#experience" on:click|preventDefault={scrollToSection}
				>Experience</a
			>
			{#if $viewportWidth >= Breakpoints.sm}
				<button
					class="btn btn-xs bg-iceberg-400 text-iceberg-100 hover:bg-iceberg-500 active:bg-iceberg-600"
					on:click={() => (showResume = true)}>Full Resume</button
				>
			{/if}
		</h2>
		{#if inView}
			<div
				class="w-inherit lg:grid lg:grid-cols-6 lg:gap-4"
				transition:blur={{ delay: 200, duration: 400 }}
			>
				<ToggleBar items={experiences} bind:selected={selectedIdx} />
				{#if visible}
					<ExperienceItem experience={experiences[selectedIdx]} />
				{/if}
			</div>
		{/if}
	</div>
	{#if $viewportWidth < Breakpoints.sm}
		<a
			class="link mt-6 text-sm font-thin text-iceberg-700 hover:text-iceberg-800 hover:no-underline active:text-iceberg-950"
			target="_blank"
			href="src/lib/assets/daniel-zych-software-engineer-resume.pdf"
			>View Full Resume</a
		>
	{/if}
	{#if showResume}
		<Resume bind:showResume />
	{/if}
</section>

<script lang="ts">
	import { blur, slide } from 'svelte/transition';
	import { viewportWidth } from '../../stores';
	import type { Experience } from '../../types/interfaces';
	import { Breakpoints } from '../../types/types';
	import ToggleBar from '../ToggleBar.svelte';
	import ExperienceItem from '../ExperienceItem.svelte';
	import Resume from '../Resume.svelte';
	import EXPERIENCE from '$lib/content/experience.json';
	import { scrollToSection } from '$lib/utils';
	import useIntersectionObserver from '$lib/useIntersectionObserver';
	import { cubicIn, cubicOut } from 'svelte/easing';

	const experiences: Experience[] = EXPERIENCE;

	let selectedIdx = 0;

	let visible = true;
	let inView = false;
	let showResume = false;

	$: {
		selectedIdx = selectedIdx;
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
	<div class="mt-40 w-screen px-4 md:w-4/5 md:px-0 lg:w-3/5">
		<div class="mb-6 flex items-center justify-center md:justify-between">
			<h2 class="text-3xl font-semibold">
				<a href="#experience" on:click|preventDefault={scrollToSection}
					>Experience</a
				>
			</h2>
			{#if $viewportWidth >= Breakpoints.sm}
				<button
					class="btn btn-xs bg-iceberg-400 text-iceberg-100 hover:bg-iceberg-500 active:bg-iceberg-600"
					on:click={() => (showResume = true)}>Full Resume</button
				>
			{/if}
		</div>
		{#if inView}
			<div
				class="w-inherit flex flex-col items-center md:grid md:flex-none md:grid-cols-6 md:items-start md:gap-4"
				transition:blur={{ delay: 200, duration: 400 }}
			>
				<ToggleBar items={experiences} bind:selected={selectedIdx} />
				{#if visible}
					<ExperienceItem experience={experiences[selectedIdx]} />
				{/if}
			</div>
		{/if}
	</div>
	{#if $viewportWidth < Breakpoints.sm && inView}
		<a
			class="link mt-6 text-sm font-thin text-iceberg-700 hover:text-iceberg-800 hover:no-underline active:text-iceberg-950"
			transition:slide={{ delay: 400, duration: 350, easing: cubicIn }}
			target="_blank"
			href="src/lib/assets/daniel-zych-software-engineer-resume.pdf"
			>View Full Resume</a
		>
	{/if}
	{#if showResume}
		<Resume bind:showResume />
	{/if}
</section>

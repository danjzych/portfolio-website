<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Project } from '../../types/interfaces';
	import ProjectItem from '../ProjectItem.svelte';
	import PROJECTS from '$lib/content/projects.json';
	import { scrollToSection } from '$lib/utils';
	import useIntersectionObserver from '$lib/useIntersectionObserver';

	const projects: Project[] = PROJECTS;
</script>

<section
	id="projects"
	class="flex min-h-screen min-w-full flex-col items-center gap-6"
	use:useIntersectionObserver
	on:enterView={() => (inView = true)}
>
	<h2
		class="mt-32 flex w-3/5 items-center justify-between pb-6 text-3xl font-semibold"
	>
		<a href="#projects" on:click|preventDefault={scrollToSection}
			>Portfolio</a
		>
		<span class="text-sm font-thin">Selected Projects</span>
	</h2>
	<div class="flex w-4/6 flex-col items-center gap-32">
		{#each projects as project}
			<ProjectItem {project} />
		{/each}
	</div>
</section>

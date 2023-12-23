<script lang="ts">
	import type { Project } from '../../types/interfaces';
	import ProjectItem from '../ProjectItem.svelte';
	import PROJECTS from '$lib/content/projects.json';
	import { scrollToSection } from '$lib/utils';

	const projects: Project[] = PROJECTS;
</script>

<section
	id="projects"
	class="flex min-h-screen min-w-full flex-col items-center gap-6"
>
	<div class="mt-40 w-3/5">
		<h2 class="text-3xl font-semibold">
			<a href="#projects" on:click|preventDefault={scrollToSection}
				>Projects</a
			>
		</h2>
		<div class="flex w-full flex-col items-center gap-16">
			{#each projects as project, i}
				<ProjectItem {project} />
			{/each}
		</div>
	</div>
</section>

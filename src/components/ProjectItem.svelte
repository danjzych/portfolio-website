<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { Project } from '../types/interfaces';
	import externalLink from '$lib/assets/svgs/external-link.svg';
	import githubIcon from '$lib/assets/svgs/github-icon.svg';
	import useIntersectionObserver from '$lib/useIntersectionObserver';

	export let project: Project;
	let inView = false;
	let badgesInView = false;
</script>

<a
	href={project.demo}
	target="_blank"
	use:useIntersectionObserver
	on:enterView={() => (inView = true)}
>
	{#if inView}
		<div
			class="rounded-lg bg-iceberg-50 shadow-xl transition-colors duration-200 hover:bg-iceberg-100 hover:shadow-md"
			transition:fly={{ delay: 50, y: -200 }}
		>
			<div class="grid w-full grid-cols-5 gap-12 p-6">
				<figure class="col-span-3 flex items-center">
					<img
						src={project.image}
						alt={`Screenshot from ${project.title} project.`}
						class="rounded-md shadow-md"
						transition:fade={{ delay: 200, duration: 500 }}
					/>
				</figure>
				<div class="col-span-2 flex flex-col justify-between">
					<h3 class="text-center text-2xl font-semibold">
						{project.title}
					</h3>
					<p class="my-6 text-right font-light">
						{project.description}
					</p>
					<div
						class="flex flex-wrap gap-1"
						use:useIntersectionObserver
						on:enterView={() => (badgesInView = true)}
					>
						{#if badgesInView}
							{#each project.technologies as technology, i}
								<div
									class="btn btn-accent btn-xs"
									transition:fade|global={{
										delay: 300 + 100 * (i + 1),
										duration: 200,
									}}
								>
									{technology}
								</div>
							{/each}
						{/if}
					</div>
					<div class="my-4 flex justify-evenly">
						<a href={project.demo} target="_blank"
							><img
								src={externalLink}
								alt="Github logo"
								class="hover:opacity-70"
							/></a
						>
						<a href={project.github} target="_blank" class=""
							><img
								src={githubIcon}
								alt="Github logo"
								class="hover:opacity-70"
							/></a
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</a>

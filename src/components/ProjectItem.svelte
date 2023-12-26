<script lang="ts">
	import type { Project } from '../types/interfaces';
	import externalLink from '$lib/assets/svgs/external-link.svg';
	import githubIcon from '$lib/assets/svgs/github-icon.svg';

	export let project: Project;
	export let i: number;

	const technologies = project.technologies.join(' | ');
</script>

<div class="">
	<div class="grid w-full grid-cols-5 gap-12 rounded-lg p-6 shadow-xl">
		<figure class="col-span-3 flex items-center">
			<img
				src={project.image}
				alt={`Screenshot from ${project.title} project.`}
				class="rounded-md"
			/>
		</figure>
		<div class="col-span-2 flex flex-col">
			<h3 class="text-center text-2xl font-semibold">
				{project.title}
			</h3>
			<div class="self-center text-sm font-extralight">
				{project.technologies.join(' ')}
			</div>
			<p class="my-6 text-right font-light">{project.description}</p>
			<!-- <div>
				<h4 class="font-semibold">Notable Features</h4>
				{#if project.features}
					<ul>
						{#each project.features as feature}
							<li>
								{feature}
							</li>
						{/each}
					</ul>
				{/if}
			</div> -->
			<div class="my-4 flex justify-evenly">
				<a href={project.demo} target="_blank" class=""
					><img src={externalLink} alt="Github logo" /></a
				>
				<a href={project.description} target="_blank" class=""
					><img src={githubIcon} alt="Github logo" /></a
				>
			</div>
			<!-- {#if project.notes}
				<small class="font-light italic">*{project.notes}</small>
			{/if} -->
		</div>
	</div>
</div>

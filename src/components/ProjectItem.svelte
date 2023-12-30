<script lang="ts">
	import type { Project } from '../types/interfaces';
	import externalLink from '$lib/assets/svgs/external-link.svg';
	import githubIcon from '$lib/assets/svgs/github-icon.svg';

	export let project: Project;
</script>

<a href={project.demo} target="_blank">
	<div
		class="rounded-lg shadow-xl hover:bg-slate-100 hover:opacity-85 hover:shadow-md"
	>
		<div class="grid w-full grid-cols-5 gap-12 p-6">
			<figure class="col-span-3 flex items-center">
				<img
					src={project.image}
					alt={`Screenshot from ${project.title} project.`}
					class="rounded-md shadow-md"
				/>
			</figure>
			<div class="col-span-2 flex flex-col justify-between">
				<h3 class="text-center text-2xl font-semibold">
					{project.title}
				</h3>
				<p class="my-6 text-right font-light">{project.description}</p>
				<div class="flex flex-wrap gap-1">
					{#each project.technologies as technology}
						<div class="btn btn-accent btn-xs">{technology}</div>
					{/each}
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
</a>

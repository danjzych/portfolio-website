<script lang="ts">
	import type { Experience } from '../types/interfaces';
	import { fade } from 'svelte/transition';
	import chevronRight from '$lib/assets/svgs/chevron-right.svg';

	export let experience: Experience;
</script>

<div
	class="mx-auto mt-3 w-5/6 rounded-lg bg-iceberg-50 px-3 py-2 shadow-xl md:col-span-4 md:mx-0 md:mt-0 md:w-full"
	transition:fade|global={{ duration: 250 }}
>
	<h3>
		<span class="text-xl font-semibold">
			{experience.position.title}
		</span>
		at
		<span class="text-iceberg-500">
			{#if experience.company.link}
				<a
					href={experience.company.link}
					class="hover:opacity-70 active:text-iceberg-700"
					target="_blank"
				>
					{experience.company.name}
				</a>
			{:else}
				{experience.company.name}
			{/if}
		</span>
	</h3>
	<small class="font-light italic"
		>{experience.position.start_date} - {experience.position
			.end_date}</small
	>
	<ul class="py-2">
		{#each experience.position.description as bullet, i}
			<li class="flex gap-2 py-1 text-sm font-light">
				<img src={chevronRight} alt="rightward-pointing arrow" />
				{bullet}
			</li>
		{/each}
	</ul>
</div>

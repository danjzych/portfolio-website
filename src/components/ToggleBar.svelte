<script lang="ts">
	import type { Experience } from '../types/interfaces';

	export let items: Experience[];
	export let selected: number;
</script>

<ul
	class="flex w-5/6 overflow-y-scroll rounded-lg shadow-sm md:col-span-2 md:block md:rounded-none md:shadow-none"
>
	{#each items as item, i}
		<li class="flex-shrink-0">
			<button
				class="flex max-h-16 min-h-12 min-w-40 items-center justify-center border-l-2 px-3 py-2 text-left hover:cursor-pointer sm:hover:bg-iceberg-100 sm:hover:font-normal md:w-full md:justify-start {selected ===
				i
					? 'border-iceberg-600 bg-iceberg-300 font-semibold'
					: 'border-iceberg-300 bg-iceberg-50 font-light md:bg-inherit'}"
				on:click={() => (selected = i)}
			>
				<small>{item.position.title}</small>
			</button>
		</li>
	{/each}
</ul>

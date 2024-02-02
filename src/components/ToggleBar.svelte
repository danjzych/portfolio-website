<script lang="ts">
	import type { Experience } from '../types/interfaces';

	export let items: Experience[];
	export let selected: number;
</script>

<ul class="flex w-5/6 overflow-y-scroll md:col-span-2 md:block">
	{#each items as item, i}
		<li class="flex-shrink-0">
			<button
				class="flex max-h-16 min-h-12 items-center border-l-2 px-3 py-2 text-left hover:cursor-pointer md:w-full md:hover:bg-iceberg-100 md:hover:font-normal {selected ===
				i
					? 'border-iceberg-600 bg-iceberg-300 font-semibold'
					: 'border-iceberg-300 font-light'}"
				on:click={() => (selected = i)}
			>
				<small>{item.position.title}</small>
			</button>
		</li>
	{/each}
</ul>

<script lang="ts">
	import type { Experience } from '../types/interfaces';

	export let items: Experience[];
	export let selected: number;
</script>

<ul class="col-span-2">
	{#each items as item, i}
		<li>
			<button
				class="w-full border-l-2 border-yellow-300 py-2 pl-3 text-left font-light hover:cursor-pointer hover:bg-yellow-100 hover:font-normal"
				class:active={selected === i}
				on:click={() => (selected = i)}
			>
				<small>{item.position.title}</small>
			</button>
		</li>
	{/each}
</ul>

<style>
	.active {
		@apply border-yellow-500 bg-accent font-semibold;
	}
</style>

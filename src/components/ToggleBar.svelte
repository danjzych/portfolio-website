<script lang="ts">
	export let items: [];
	export let selected: number;
</script>

<ul class="col-span-2">
	{#each items as item, i}
		<li>
			<button
				class="w-full border-l-2 border-lime-300 py-2 pl-3 text-left font-light hover:cursor-pointer hover:bg-lime-100 hover:font-normal"
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
		@apply border-lime-500 bg-lime-200 font-semibold;
	}
</style>

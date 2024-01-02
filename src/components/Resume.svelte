<script lang="ts">
	import { fly } from 'svelte/transition';
	import resume from '$lib/assets/daniel-zych-software-engineer-resume.pdf';
	import { onMount } from 'svelte';

	export let showResume: Boolean;

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded === true}
	<div
		class="position fixed top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
		transition:fly|global={{ delay: 50, duration: 400, y: 1000 }}
	>
		<button
			class="position btn btn-md absolute right-0 top-0 m-6 bg-iceberg-400 text-iceberg-100 shadow-2xl hover:bg-iceberg-500 hover:shadow-sm active:bg-iceberg-600 active:shadow-none"
			on:click={() => (showResume = false)}>Close</button
		>
		<iframe
			src={resume}
			class="h-5/6 w-3/4 rounded-2xl border-iceberg-600 shadow-2xl"
			title="Daniel Zych Resume"
		/>
	</div>
{/if}

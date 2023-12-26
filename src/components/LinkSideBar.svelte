<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import linkedInIcon from '$lib/assets/svgs/linkedin-icon.svg';
	import githubIcon from '$lib/assets/svgs/github-icon.svg';

	let visible = false;

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 0);
	});
</script>

{#if visible}
	<div
		class="position fixed right-0 top-1/2 z-50 flex flex-col items-center justify-between rounded-l-2xl border-2 border-r-0 border-base-200 shadow-lg"
		transition:fly={{ duration: 200, x: 50, y: 0, delay: 2500 }}
	>
		<a
			href="https://www.linkedin.com/in/danielzych/"
			target="_blank"
			class="rounded-tl-2xl p-3 duration-150 ease-in hover:bg-lime-100"
			><img src={linkedInIcon} alt="LinkedIn Logo" /></a
		>
		<a
			href="https://github.com/danjzych"
			target="_blank"
			class="rounded-bl-2xl p-3 duration-150 ease-in hover:bg-lime-100"
			><img src={githubIcon} alt="Github Logo" /></a
		>
	</div>
{/if}

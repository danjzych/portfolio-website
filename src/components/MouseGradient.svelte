<script lang="ts">
	import { fade } from 'svelte/transition';
	import { viewport, cursorCoordinates } from '../stores';
	import { onMount } from 'svelte';

	let visible: boolean;

	$: gradientPosition = {
		x: ($cursorCoordinates.x / $viewport.width) * 100,
		y: ($cursorCoordinates.y / $viewport.height) * 100,
	};

	onMount(() => {
		visible = !visible;
	});
</script>

{#if visible}
	<div
		class="position fixed top-0 -z-50 min-h-full min-w-full"
		style="background-image: radial-gradient(circle at {gradientPosition.x}% {gradientPosition.y}%, #d5f3ed 0%, transparent 20%)"
		transition:fade={{ delay: 2000, duration: 1000 }}
	></div>
{/if}

<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<div
	id="hero"
	class="flex min-h-screen min-w-full flex-col justify-center gap-6 px-4 sm:px-8 md:px-40 lg:px-72"
>
	{#if visible}
		<div transition:fly|global={{ delay: 2000, duration: 500, x: -200 }}>
			<p class="font-extralight text-iceberg-700">Hi, I'm</p>
			<h1 class="max-w-max text-7xl font-semibold">
				<span class="hero-name"> Daniel Zych! </span>
			</h1>
			<!-- <p class="text-5xl font-light">I build things.</p> -->
		</div>
		<p
			class="text-lg"
			transition:fade|global={{ delay: 2750, duration: 750 }}
		>
			I'm a Frontend-focused Full-Stack Software Engineer who loves
			building powerful and intuitive applications, bringing ideas to life
			as great user experiences.
		</p>
	{/if}
</div>

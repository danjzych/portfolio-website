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
	class="flex min-h-screen min-w-full flex-col justify-center gap-6 px-8 md:px-40 lg:px-72"
>
	{#if visible}
		<div transition:fly|global={{ delay: 2000, duration: 500, x: -200 }}>
			<p class="font-extralight">Hi, I'm</p>
			<h1 class="hero-name max-w-max text-7xl font-semibold">
				Daniel Zych!
			</h1>
			<!-- <p class="text-5xl font-light">I build things.</p> -->
		</div>
		<p
			class="text-lg"
			transition:fade|global={{ delay: 2750, duration: 750 }}
		>
			I'm a Full-Stack Software Engineer who loves designing and building
			powerful and intuitive applications that make it as easy as possible
			for users to get value from them.
		</p>
	{/if}
</div>

<style>
	.hero-name {
		background: radial-gradient(red, blue);
		background-size: 200% auto;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		animation: move-gradient 5s linear infinite;
	}

	@keyframes move-gradient {
		to {
			background-position: 200% center;
		}
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { scrollToSection } from '$lib/utils';

	let visible = false;
	let mainVisible = false;

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 200);
	});
</script>

{#if visible}
	<nav
		class="position navbar fixed z-50 bg-base-100 shadow-md"
		transition:fly={{ y: -200, duration: 1000 }}
		on:introend={() => {
			mainVisible = true;
		}}
	>
		<a
			class="navbar-start text-3xl"
			href="#hero"
			on:click|preventDefault={scrollToSection}>Daniel Zych</a
		>
		<div class="navbar-end">
			{#if mainVisible}
				<div class="flex items-center gap-2">
					<a
						href="#about"
						on:click|preventDefault={scrollToSection}
						transition:fly|global={{ delay: 0, y: -20 }}>About</a
					>
					<a
						href="#experience"
						on:click|preventDefault={scrollToSection}
						transition:fly|global={{ delay: 200, y: -20 }}>Experience</a
					>
					<a
						href="#projects"
						on:click|preventDefault={scrollToSection}
						transition:fly|global={{ delay: 400, y: -20 }}>Portfolio</a
					>
					<a
						href="#contact"
						on:click|preventDefault={scrollToSection}
						transition:fly|global={{ delay: 600, y: -20 }}>Contact</a
					>
					<button
						class="btn btn-sm bg-iceberg-500 text-iceberg-50 hover:bg-iceberg-600 active:bg-iceberg-700"
						transition:fly|global={{ delay: 900, x: -50 }}>Resume</button
					>
				</div>
			{/if}
		</div>
	</nav>
{/if}

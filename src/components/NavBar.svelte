<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { viewportWidth } from '../stores';
	import { Breakpoints } from '../types/types';
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
		class="position navbar fixed z-40 bg-base-100 shadow-md"
		transition:fly={{ y: -200, duration: 1000 }}
		on:introend={() => {
			mainVisible = true;
		}}
	>
		<a
			class="hero-name navbar-start text-3xl font-extrabold tracking-tighter"
			href="#hero"
			on:click|preventDefault={scrollToSection}>DZ</a
		>
		<div class="navbar-end">
			{#if mainVisible}
				{#if $viewportWidth >= Breakpoints.sm}
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
					</div>
				{:else}
					<div class="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							class="btn btn-circle btn-ghost"
							transition:fade|global={{ duration: 200 }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path d="M4 6h16M4 12h16M4 18h7" /></svg
							>
						</div>
						<ul
							tabIndex={0}
							class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
						>
							<li>
								<a href="#about" on:click|preventDefault={scrollToSection}
									>About</a
								>
							</li>
							<li>
								<a
									href="#experience"
									on:click|preventDefault={scrollToSection}>Experience</a
								>
							</li>
							<li>
								<a
									href="#projects"
									on:click|preventDefault={scrollToSection}>Portfolio</a
								>
							</li>
							<li>
								<a
									href="#contact"
									on:click|preventDefault={scrollToSection}>Contact</a
								>
							</li>
						</ul>
					</div>
				{/if}
			{/if}
		</div>
	</nav>
{/if}

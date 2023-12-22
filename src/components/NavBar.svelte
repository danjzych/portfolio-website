<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let visible = false;
	let mainVisible = false;

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 200);
	});

	function scrollToSection(sectionId: string) {
		const selectedSection = document.querySelector(sectionId);

		if (selectedSection) {
			selectedSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}

	function handleClick(evt) {
		const sectionId = evt.target.getAttribute('href');

		scrollToSection(sectionId);
	}
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
			href="/"
			on:click|preventDefault={() => scrollToSection('#hero')}
			>Logo Here!</a
		>
		<div class="navbar-end">
			{#if mainVisible}
				<div class="flex items-center gap-2">
					<a
						href="#about"
						on:click|preventDefault={handleClick}
						transition:fly|global={{ delay: 0, y: -20 }}>About</a
					>
					<a
						href="#experience"
						on:click|preventDefault={handleClick}
						transition:fly|global={{ delay: 200, y: -20 }}>Experience</a
					>
					<a
						href="#projects"
						on:click|preventDefault={handleClick}
						transition:fly|global={{ delay: 400, y: -20 }}>Projects</a
					>
					<a
						href="#contact"
						on:click|preventDefault={handleClick}
						transition:fly|global={{ delay: 600, y: -20 }}>Contact</a
					>
					<button
						class="btn btn-sm"
						transition:fly|global={{ delay: 900, x: -50 }}>Resume</button
					>
				</div>
			{/if}
		</div>
	</nav>
{/if}

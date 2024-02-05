<script lang="ts">
	import { onMount } from 'svelte';
	import { viewport } from '../stores';
	import mousePosition from '$lib/actions/mousePosition';
	import Hero from '../components/sections/Hero.svelte';
	import About from '../components/sections/About.svelte';
	import Experience from '../components/sections/Experience.svelte';
	import Projects from '../components/sections/Projects.svelte';
	import Contact from '../components/sections/Contact.svelte';
	import Footer from '../components/Footer.svelte';

	onMount(() => {
		viewport.set({ width: window.innerWidth, height: window.innerHeight });

		window.addEventListener('resize', (evt) => {
			viewport.set({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		});
	});
</script>

<main use:mousePosition>
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Contact />
</main>
<Footer />

<script lang="ts">
	import { onMount } from 'svelte';
	import { viewportWidth } from '../stores';
	import mousePosition from '$lib/actions/mousePosition';
	import Hero from '../components/sections/Hero.svelte';
	import About from '../components/sections/About.svelte';
	import Experience from '../components/sections/Experience.svelte';
	import Projects from '../components/sections/Projects.svelte';
	import Contact from '../components/sections/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	import MouseShadow from '../components/MouseShadow.svelte';

	/** Track window.innerWidth to responsively component layout */
	onMount(() => {
		viewportWidth.set(window.innerWidth);

		window.addEventListener('resize', (evt) => {
			viewportWidth.set(window.innerWidth);
		});
	});
</script>

<main use:mousePosition>
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Contact />
	<MouseShadow />
</main>
<Footer />

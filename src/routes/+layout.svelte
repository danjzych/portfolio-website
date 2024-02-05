<script lang="ts">
	import '../app.css';
	import { viewport } from '../stores';
	import { Breakpoints } from '../types/types';
	import NavBar from '../components/NavBar.svelte';
	import LinkSideBar from '../components/LinkSideBar.svelte';
	import MouseGradient from '../components/MouseGradient.svelte';
</script>

<NavBar />
<slot />
{#if $viewport.width >= Breakpoints.lg}
	<LinkSideBar />
{/if}
<MouseGradient />

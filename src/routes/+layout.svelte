<script lang="ts">
	import '../app.css';
	import { viewportWidth } from '../stores';
	import { Breakpoints } from '../types/types';
	import NavBar from '../components/NavBar.svelte';
	import LinkSideBar from '../components/LinkSideBar.svelte';

	export const prerender = true;
</script>

<NavBar />
<slot />
{#if $viewportWidth >= Breakpoints.lg}
	<LinkSideBar />
{/if}

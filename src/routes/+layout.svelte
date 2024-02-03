<script lang="ts">
	import '../app.css';
	import { viewportWidth } from '../stores';
	import { Breakpoints } from '../types/types';
	import NavBar from '../components/NavBar.svelte';
	import LinkSideBar from '../components/LinkSideBar.svelte';
	import MouseShadow from '../components/MouseShadow.svelte';
</script>

<MouseShadow />
<NavBar />
<slot />
{#if $viewportWidth >= Breakpoints.lg}
	<LinkSideBar />
{/if}

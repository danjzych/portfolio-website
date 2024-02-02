<script lang="ts">
	import { cursorCoordinates } from '../stores';
</script>

{#if $cursorCoordinates?.x && $cursorCoordinates?.y}
	<div
		id="mouse-shadow"
		style="top: {$cursorCoordinates.x}, left: {$cursorCoordinates.y}"
	></div>
{/if}

<style>
	#mouse-shadow {
		position: fixed;
		width: 100px;
		height: 100px;
		border: 10px solid black;
	}
</style>

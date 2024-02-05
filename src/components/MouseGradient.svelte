<script lang="ts">
	import { viewport, cursorCoordinates } from '../stores';

	$: gradientPosition = {
		x: ($cursorCoordinates.x / $viewport.width) * 100,
		y: ($cursorCoordinates.y / $viewport.height) * 100,
	};
</script>

<div
	class="position fixed top-0 -z-50 min-h-full min-w-full"
	style="background-image: radial-gradient(circle at {gradientPosition.x}% {gradientPosition.y}%, #a9e6db, transparent)"
></div>

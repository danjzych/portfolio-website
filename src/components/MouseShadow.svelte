<script lang="ts">
	import { cursorCoordinates } from '../stores';
</script>

<div
	class="position fixed size-40 border-2"
	style:top="{$cursorCoordinates.y}px"
	style:left="{$cursorCoordinates.x}px"
></div>

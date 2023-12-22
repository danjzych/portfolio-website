<script lang="ts">
	import type { Experience } from '../types/interfaces';

	export let experience: Experience;
</script>

<div class="col-span-4 border-2 p-1">
	<h3>
		<span class="text-xl font-semibold">
			{experience.position.title}
		</span>
		at
		<span>
			<a href="/">
				{experience.company.name}
			</a>
		</span>
	</h3>
</div>

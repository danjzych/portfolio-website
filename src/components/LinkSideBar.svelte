<script lang="ts">
	import linkedInIcon from '$lib/assets/svgs/linkedin-icon.svg';
	import githubIcon from '$lib/assets/svgs/github-icon.svg';
</script>

<div
	class="position fixed right-0 top-1/2 flex flex-col items-center justify-between rounded-l-2xl border-2 border-r-0 border-base-200 shadow-lg"
>
	<a
		href="https://www.linkedin.com/in/danielzych/"
		target="_blank"
		class="p-3 duration-150 ease-in hover:bg-lime-200"
		><img src={linkedInIcon} alt="LinkedIn Logo" /></a
	>
	<a
		href="https://github.com/danjzych"
		target="_blank"
		class="p-3 duration-150 ease-in hover:bg-lime-200"
		><img src={githubIcon} alt="Github Logo" /></a
	>
</div>

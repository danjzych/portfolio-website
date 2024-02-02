<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import useIntersectionObserver from '$lib/useIntersectionObserver';
	import mail from '$lib/assets/svgs/mail.svg';
	import mailOpen from '$lib/assets/svgs/mail-open.svg';
	import linkedInIcon from '$lib/assets/svgs/linkedin-icon-100.svg';
	import githubIcon from '$lib/assets/svgs/github-icon-100.svg';

	let inView = false;
	let currentIcon = mail;
</script>

<section
	id="contact"
	class="flex min-h-screen min-w-full flex-col items-center justify-center gap-6 px-4 sm:px-0"
	use:useIntersectionObserver
	on:enterView={() => (inView = true)}
>
	<h3 class="text-center text-4xl font-semibold">
		Let's build something together!
	</h3>
	{#if inView}
		<p
			class="text-center font-light sm:w-3/5"
			transition:fade={{ duration: 400 }}
		>
			I could talk about software engineering all day, and would love to
			connect with you! Whether you want to talk about an open-source
			project, an open position, or just tech in general, I’m happy to
			chat. Shoot me an email, drop me a message on LinkedIn, or take a
			look at my Github!
		</p>
		<div class="join">
			<a
				class="btn join-item border-0 bg-iceberg-400 transition-colors duration-200 hover:bg-iceberg-500 hover:shadow-md active:bg-iceberg-600"
				on:mouseover={() => (currentIcon = mailOpen)}
				on:focus={() => (currentIcon = mailOpen)}
				on:mouseout={() => (currentIcon = mail)}
				on:blur={() => (currentIcon = mail)}
				href="MAILTO:danjzych@gmail.com"
				in:fly|global={{ delay: 500, duration: 500, y: 200 }}
				><img
					id="contact-email-icon"
					src={currentIcon}
					alt="mail icon"
					loading="lazy"
				/></a
			>
			<a
				href="https://www.linkedin.com/in/danielzych/"
				target="_blank"
				class="btn join-item border-0 bg-iceberg-400 transition-colors duration-200 hover:bg-iceberg-500 hover:shadow-md active:bg-iceberg-600"
				in:fly|global={{ delay: 600, duration: 500, y: 200 }}
				><img src={linkedInIcon} alt="LinkedIn Logo" /></a
			>
			<a
				href="https://github.com/danjzych"
				target="_blank"
				class="btn join-item border-0 bg-iceberg-400 transition-colors duration-200 hover:bg-iceberg-500 hover:shadow-md active:bg-iceberg-600"
				in:fly|global={{ delay: 700, duration: 500, y: 200 }}
				><img src={githubIcon} alt="Github Logo" /></a
			>
		</div>
	{/if}
</section>

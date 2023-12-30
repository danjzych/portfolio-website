<script lang="ts">
	import { fly } from 'svelte/transition';
	import mail from '$lib/assets/svgs/mail.svg';
	import mailOpen from '$lib/assets/svgs/mail-open.svg';
	import { onMount } from 'svelte';

	let loaded = false;
	let currentIcon = mail;

	onMount(() => {
		loaded = true;
	});
</script>

<section
	id="contact"
	class="flex min-h-screen min-w-full flex-col items-center justify-center gap-6"
>
	<h3 class="text-4xl font-semibold">Let's build something together!</h3>
	<p class="w-3/5 text-center font-light">
		I’m currently on the hunt for my next engineering opportunity, and
		would love to connect with you. Whether you want to talk about an open
		position, an open-source project, or just tech in general, I’m happy to
		chat. Shoot me an email or drop me a message on <a
			href="https://www.linkedin.com/in/danielzych/"
			target="_blank"
			class="link">LinkedIn</a
		>!
	</p>
	{#if loaded}
		<a
			class="btn shadow-lg hover:shadow-md"
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
	{/if}
</section>

<script lang="ts">
	import mail from '$lib/assets/svgs/mail.svg';
	import mails from '$lib/assets/svgs/mails.svg';

	let currentIcon = mail;
</script>

<section
	id="contact"
	class="flex min-h-screen min-w-full flex-col items-center justify-center gap-6"
>
	<h3 class="text-4xl font-semibold">Let's build something together!</h3>
	<p class="w-3/5 text-center font-light">
		I’m currently looking on the hunt for my next engineering opportunity,
		and would love to connect with you. Whether you want to talk about an
		open position, an open-source project, or just tech in general, I’m
		happy to chat. Shoot me an email or drop me a message on <a
			href="https://www.linkedin.com/in/danielzych/"
			target="_blank"
			class="link">LinkedIn</a
		>!
	</p>
	<button
		class="btn btn-primary shadow-lg hover:shadow-2xl"
		on:mouseover={() => (currentIcon = mails)}
		on:focus={() => (currentIcon = mails)}
		on:mouseout={() => (currentIcon = mail)}
		on:blur={() => (currentIcon = mail)}
		><img
			id="contact-email-icon"
			src={currentIcon}
			alt="mail icon"
			loading="lazy"
		/></button
	>
</section>

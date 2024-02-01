<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import headshot from '$lib/assets/Daniel-Zych.png';
	import { scrollToSection } from '$lib/utils';
	import useIntersectionObserver from '$lib/useIntersectionObserver';

	let inView = false;
</script>

<section
	id="about"
	class="flex min-h-screen min-w-full flex-col items-center"
	use:useIntersectionObserver
	on:enterView={() => (inView = true)}
>
	<div class="mt-40 px-4 md:grid md:w-3/5 md:grid-cols-5 md:gap-4 md:px-0">
		<div
			class="flex flex-col items-center gap-3 font-light md:col-span-3 md:items-start"
		>
			<h2 class="text-3xl font-semibold">
				<a href="#about" on:click|preventDefault={scrollToSection}
					>About Me</a
				>
			</h2>
			{#if inView}
				<div transition:fade={{ delay: 200 }} class="flex flex-col gap-3">
					<p>
						In a past life, I was a Product Manager that built a
						data-driven SaaS product from the ground up, as well as touring
						musician and record producer.
					</p>
					<p>
						Though I’ve moved on from product and design, I’m still product
						and design-minded, and love building applications with clean,
						snappy front-ends that are intuitive and enjoyable for the end
						user. I love any opportunity to apply both my analytical and
						creative sides to technical projects, and bring a unique blend
						of both to everything I work on.
					</p>
					<p>
						When I’m not hunkered down at my computer, I’m making music 🎸,
						skateboarding 🛹, hanging out with my girlfriend and our cats
						🐈, or having one more coffee than I need to, then regretting
						it ☕️.
					</p>
				</div>
			{/if}
		</div>
		<div class="mt-8 flex flex-col items-center md:col-span-2 md:my-0">
			{#if inView}
				<img
					src={headshot}
					alt="Daniel Zych Headshot"
					loading="lazy"
					class="w-40 drop-shadow-2xl md:w-full"
					in:fly={{ delay: 400, duration: 1000, x: 500, opacity: 0 }}
				/>
			{/if}
		</div>
	</div>
</section>

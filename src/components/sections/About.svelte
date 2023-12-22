<script lang="ts">
	import headshot from '$lib/assets/Daniel-Zych.png';
</script>

<section
	id="about"
	class="flex min-h-screen min-w-full flex-col items-center justify-center"
>
	<div class="grid w-3/5 grid-cols-5 gap-4">
		<div class="col-span-3 flex flex-col gap-3 font-light">
			<h2 class="text-3xl font-semibold">About Me</h2>
			<p>
				In a past life, I was a Product Manager that built a data-driven
				SaaS product from the ground up (as well as touring musician and
				record producer).
			</p>
			<p>
				Though, I’ve moved on from product and design, I’m still product
				and design-minded, and love building applications with clean,
				snappy front-ends that are intuitive and enjoyable for the end
				user. I love any opportunity to apply both my analytical and
				creative sides to technical projects, and bring a unique blend of
				both to everything I work on.
			</p>
			<p>
				When I’m not at my computer, I’m skateboarding, hanging out with my
				girlfriend and our cats, or having one more coffee than I need to,
				then regretting it.
			</p>
		</div>
		<div class="col-span-2 flex items-center">
			<img src={headshot} alt="Daniel Zych Headshot" />
		</div>
	</div>
</section>

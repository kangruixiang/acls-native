<script>
	import { twMerge } from 'tailwind-merge';
	export let minutes;
	export let seconds;
	let className = undefined;
	export { className as class };
</script>

<div class={twMerge('mx-4 flex flex-col gap-2', className)}>
	<h2 class="text-neutral-100">Total Code Time</h2>

	<div class=" min-w-[80%] rounded-md bg-white px-4 py-8 text-center text-5xl">
		<strong> {minutes} min {seconds >= 10 || seconds < 0 ? seconds : '0' + seconds} sec</strong>
	</div>
</div>

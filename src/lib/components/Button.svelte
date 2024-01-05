<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let grow = false;
	export let color = 'default';

	const baseClass =
		'rounded px-2 py-2 shadow-[2px_2px_0px_0px_black,0px_0px_0px_1px_black] active:shadow-[inset_0px_1px_0px_0px_black,0px_0px_0px_1px_black]';
	const colorClasses = {
		default:
			'bg-muted text-neutral-500 hover:text-neutral-900 hover:text-neutral-700 hover:bg-neutral-100 active:bg-neutral-300  ',
		yellow:
			'bg-yellow-400 text-neutral-900 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500',
		gray: 'bg-[#515458] hover:bg-[#3e4146] active:bg-[#3e4146] text-neutral-50',
		red: 'bg-[#a52222] hover:bg-[#8d1c1c] active:bg-[#811a1a] text-neutral-50  '
	};

	$: btnClass = twMerge(baseClass, colorClasses[color], grow && 'w-full grow');
</script>

<button on:click class={btnClass}><slot /></button>

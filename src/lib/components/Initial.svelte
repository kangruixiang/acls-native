<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Footer } from '$lib/components/index';
	import Separator from './ui/separator/separator.svelte';

	let { codeStartTime, pause } = $props();

	function getCodeStartTime(interval: number) {
		codeStartTime = Date.now() - interval * 60 * 1000;
		pause = false;
		console.log(codeStartTime, pause);
	}

	const codeTimes = [
		{
			name: 'Now',
			time: 0
		},
		{
			name: '1 min ago',
			time: 1
		},
		{
			name: '2 min ago',
			time: 2
		},
		{
			name: '3 min ago',
			time: 3
		},
		{
			name: '5 min ago',
			time: 5
		},
		{
			name: '10 min ago',
			time: 10
		},
		{
			name: '15 min ago',
			time: 15
		},
		{
			name: '20 min ago',
			time: 20
		},
		{
			name: '30 min ago',
			time: 30
		}
	];
</script>

<div>
	<div class="mb-2 mt-20 px-4">Code Started</div>
	<div class="grid grid-cols-1 justify-evenly gap-2 px-4">
		{#each codeTimes as codeTime}
			<Button on:click={() => getCodeStartTime(codeTime.time)}>{codeTime.name}</Button>
		{/each}
		<Separator></Separator>
		<Button on:click={() => goto('/recordList')}>Previous Codes</Button>
	</div>
	<Footer />
</div>

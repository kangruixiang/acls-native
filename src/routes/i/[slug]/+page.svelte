<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/index';
	import { Share } from '@capacitor/share';
	import TurndownService from 'turndown';

	let { data } = $props();

	async function copyHtml() {
		const turndownService = new TurndownService({
			bulletListMarker: '-'
		});
		const markdown = turndownService.turndown(data.record.value);
		await navigator.clipboard.writeText(markdown);
	}

	const shareHtml = async () => {
		const turndownService = new TurndownService({
			bulletListMarker: '-'
		});
		const markdown = turndownService.turndown(data.record.value);
		await Share.share(markdown);
	};
</script>

<!-- <ion-content> -->
<div class="flex h-full flex-col gap-10 overflow-y-auto px-4 py-8">
	<div>
		{@html data.record.value}
	</div>
	<div class="flex flex-col gap-2">
		<Button on:click={copyHtml}>Copy</Button>
		<Button
			on:click={() => {
				goto('/recordList');
			}}>Back to Previous Codes</Button
		>
	</div>
</div>
<!-- </ion-content> -->
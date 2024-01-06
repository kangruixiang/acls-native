<script>
	import { goto } from '$app/navigation';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/index';
	import { alertController } from 'ionic-svelte';
	import { Preferences } from '@capacitor/preferences';

	let { data } = $props();

	let records = $state(
		data.records.keys.sort().map((oldDate) => {
			const newDate = new Date(parseInt(oldDate)).toLocaleString();
			return {
				oldDate,
				newDate
			};
		})
	);

	const showAlert = async (options) => {
		const alert = await alertController.create(options);
		alert.present();
	};

	const deleteItem = async (oldDate) => {
		const options = {
			header: 'Confirm',
			message: 'Delete this record?',
			buttons: [
				{
					text: 'Delete',
					handler: () => {
						Preferences.remove({
							key: oldDate
						});
						records = records.filter((item) => {
							return item.oldDate != oldDate;
						});
					}
				},
				{
					text: 'Cancel',
					role: 'cancel'
				}
			]
		};
		return showAlert(options);
	};
</script>

<!-- <ion-content> -->
<div class="h-full mx-2 my-2 flex flex-col justify-start gap-4 overflow-y-auto">
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="">Date</Table.Head>
				<Table.Head class="text-right">Delete</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each records as item}
				<Table.Row>
					<Table.Cell
						class="cursor-pointer font-medium"
						on:click={() => goto(`/i/${item.oldDate}`)}
					>
						{item.newDate}
					</Table.Cell>
					<Table.Cell class="flex justify-end">
						<Button on:click={() => deleteItem(item.oldDate)}>Delete</Button>
					</Table.Cell>
				</Table.Row>{/each}
		</Table.Body>
	</Table.Root>
	<Button class="self-end" on:click={() => goto('/home')}>Back to Codes</Button>
</div>
<!-- </ion-content> -->
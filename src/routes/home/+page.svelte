<script lang="ts">
	import { Preferences } from '@capacitor/preferences';
	import { IonPage } from 'ionic-svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import {
		Button,
		MedRow,
		HTCard,
		Summary,
		Initial,
		Countdown,
		resetAll,
		codeEnd
	} from '$lib/components/index';
	import { goto } from '$app/navigation';

	let codeStartTime = $state(0);
	let pause = $state(true);
	let intervalTime = $state(0);
	let intervalTimeID = $state(null);
	let summary = $state('');

	let minutes = $derived(Math.floor(intervalTime / 1000 / 60));
	let seconds = $derived(Math.floor((intervalTime / 1000 / 60 - minutes) * 60));

	function startTimer() {
		intervalTimeID = setInterval(() => {
			intervalTime = Date.now() - codeStartTime;
		}, 1000);
	}

	function pauseCode() {
		if (intervalTimeID) {
			clearInterval(intervalTimeID);
		}
		intervalTime = Date.now() - codeStartTime;
		pause = !pause;
	}

	async function endCode() {
		pause = true;
		$codeEnd = {
			name: 'code ended',
			time: Date.now()
		};

		await Preferences.set({
			key: codeStartTime.toString(),
			value: summary.innerHTML
		});
		resetAll();
		goto('/recordList');
	}

	$effect(() => {
		if (codeStartTime && !pause) {
			startTimer();
		}
	});
</script>

<!-- <IonPage> -->
<!-- <ion-content> -->

<div class="flex h-full flex-col gap-4 overflow-y-auto pt-8">
	{#if !codeStartTime}
		<Initial bind:codeStartTime bind:pause />
	{/if}

	{#if codeStartTime}
		<Tabs.Root value="main" class="flex w-full flex-col items-center">
			<Tabs.List>
				<Tabs.Trigger value="main">Main</Tabs.Trigger>
				<Tabs.Trigger value="HNT">Hs and Ts</Tabs.Trigger>
				<Tabs.Trigger value="summary">Summary</Tabs.Trigger>
				<Tabs.Trigger value="end">End</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="main" class="w-full">
				<div class="flex flex-col gap-4">
					<div class="pt-8">
						<Countdown {minutes} {seconds} class="text-foreground" />
					</div>
					<div>
						<MedRow
							time={120}
							bind:pause
							rowType="pulse"
							let:pulseCheckCountDown
							class="bg-[#1f2e4f] pb-6 pt-4"
						>
							<svelte:fragment slot="title">Next Pulse Check</svelte:fragment>
							<div class="flex justify-between gap-2">
								<Button grow on:click={() => pulseCheckCountDown('PEA')}>PEA</Button>
								<Button grow on:click={() => pulseCheckCountDown('Asystole')}>Asystole</Button>
								<Button grow on:click={() => pulseCheckCountDown('VT/VF')}>VT/VF</Button>
								<Button grow on:click={() => pulseCheckCountDown('ROSC')}>ROSC</Button>
							</div>
						</MedRow>

						<MedRow time={240} bind:pause let:epiCountDown class="bg-[#324572] pt-4 "
							><svelte:fragment slot="title">Drugs and Shocks</svelte:fragment>
							<Button on:click={() => epiCountDown('epi')}>Epinephrine</Button>
						</MedRow>

						<MedRow
							time={180}
							displayTime={false}
							bind:pause
							let:epiCountDown
							class="bg-[#324572] pb-12"
						>
							<div class="flex w-full flex-col gap-2">
								<div class="flex gap-2">
									<Button grow on:click={() => epiCountDown('amio')}>Amiodarone</Button>
									<Button grow on:click={() => epiCountDown('lido')}>Lidocaine</Button>
								</div>
								<Button grow color="yellow" on:click={() => epiCountDown('shock')}>Shock</Button>
							</div>
						</MedRow>
					</div>
				</div></Tabs.Content
			>
			<Tabs.Content value="HNT" class="w-full"><HTCard /></Tabs.Content>
			<Tabs.Content value="summary" class="w-full"
				><Summary {intervalTime} {codeStartTime} bind:summary /></Tabs.Content
			>
			<Tabs.Content value="end" class="w-full"
				><div class="mt-10 flex w-full flex-col gap-4 px-4">
					<Button grow color="gray" on:click={pauseCode}>
						{#if pause}
							Restart
						{:else}
							Pause
						{/if}
						Code</Button
					>
					<Button grow color="red" on:click={endCode}>End Code</Button>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	{/if}
</div>
<!-- </ion-content> -->
<!-- </IonPage> -->

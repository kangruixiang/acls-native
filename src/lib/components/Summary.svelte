<script lang="ts">
	import {
		epi,
		amio,
		lido,
		fluid,
		airway,
		mag,
		ca,
		tpa,
		needle,
		shock,
		bicarb,
		dextrose,
		pericard,
		rhythms,
		getIntervalTime,
		codeEnd
	} from '$lib/components/index';

	export let intervalTime = 0;
	export let codeStartTime = Date.now();
	export let summary = '';

	const newDate = new Date(Date.now()).toLocaleString();

	function getInterventionTime(codeStartTime: number, longInterventionTime: number) {
		// const readableInterventionTime = longInterventionTime - codeStartTime;
		const date = new Date(longInterventionTime);

		let hour = date.getHours();
		let minute = date.getMinutes();
		let second = date.getSeconds();

		if (hour < 10) {
			hour = '0' + hour;
		}
		if (minute < 10) {
			minute = '0' + minute;
		}
		if (second < 10) {
			second = '0' + second;
		}
		const time = `${hour}:${minute}:${second}`;

		return time;
	}

	$: minutes = Math.floor(intervalTime / 1000 / 60);
	$: seconds = Math.floor((intervalTime / 1000 / 60 - minutes) * 60);

	$: items = [
		{
			name: 'epinephrine',
			value: $epi.length
		},
		{
			name: 'shock',
			value: $shock.length
		},
		{
			name: 'amiodarone',
			value: $amio.length
		},
		{
			name: 'lidocaine',
			value: $lido.length
		},
		{
			name: 'intravenous fluid',
			value: $fluid.length
		},
		{
			name: 'magnesium',
			value: $mag.length
		},
		{
			name: 'calcium',
			value: $ca.length
		},
		{
			name: 'TPA',
			value: $tpa.length
		},
		{
			name: 'needle decompression',
			value: $needle.length
		},
		{
			name: 'dextrose',
			value: $dextrose.length
		},
		{
			name: 'pericardiocentesis',
			value: $pericard.length
		},
		{
			name: 'bicarb',
			value: $bicarb.length
		}
	];

	$: interventions = [
		...$amio,
		...$epi,
		...$lido,
		...$fluid,
		...$airway,
		...$mag,
		...$ca,
		...$tpa,
		...$needle,
		...$shock,
		...$bicarb,
		...$dextrose,
		...$pericard,
		...$rhythms
	].sort((a, b) => a.time - b.time);
</script>

<div bind:this={summary} class="flex flex-col gap-4 px-4 py-2">
	<div class="grow">
		<ul>
			<li><strong>{newDate}</strong></li>
			<li><strong>Total code time: {minutes} min {seconds} sec</strong></li>
			<li>
				Airway obtained: {$airway.length != 0 ? `at ${getIntervalTime(codeStartTime)} min` : 'no'}
			</li>
			{#each items as item}
				{#if item.value != 0}
					<li>{item.value}x {item.name}</li>
				{/if}
			{/each}
			{#if $rhythms.length != 0}
				<li>
					<strong>Rhythms:</strong>
					<ul>
						{#each $rhythms as rhythm}
							<li>{rhythm.name}: at {getIntervalTime(codeStartTime)} min</li>
						{/each}
					</ul>
				</li>
			{/if}
		</ul>

		<div class="mt-2">
			<strong>Details</strong>
			<ul>
				<li />
				<li>{getInterventionTime(codeStartTime, codeStartTime)}: code started</li>
				{#each interventions as intervention}
					<li>
						{getInterventionTime(codeStartTime, intervention.time)}: {intervention.name}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

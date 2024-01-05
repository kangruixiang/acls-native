<script>
	import { twMerge } from 'tailwind-merge';
	import { epi, amio, lido, rhythms, shock } from '$lib/components/index';
	export let time = 120;
	export let pause = false;
	export let rowType = 'med';
	export let displayTime = true;
	let className = undefined;
	export { className as class };

	let localTime = time;
	let pulseIntervalID = null;
	let epiIntervalID = null;

	function epiCountDown(med) {
		if (med === 'epi') {
			$epi = [
				...$epi,
				{
					name: 'epinephrine',
					time: Date.now()
				}
			];
		}
		if (med === 'amio') {
			$amio = [
				...$amio,
				{
					name: 'amiodarone',
					time: Date.now()
				}
			];
		}
		if (med === 'lido') {
			$lido = [
				...$lido,
				{
					name: 'lidocaine',
					time: Date.now()
				}
			];
		}
		if (med === 'shock') {
			$shock = [
				...$shock,
				{
					name: 'cardioversion',
					time: Date.now()
				}
			];
			return;
		}

		if (epiIntervalID) {
			clearInterval(epiIntervalID);
		}
		localTime = time;
		epiIntervalID = setInterval(() => {
			localTime--;
		}, 1000);

		pause = false;
	}

	function pulseCheckCountDown(pulse) {
		$rhythms = [
			...$rhythms,
			{
				name: pulse,
				time: Date.now()
			}
		];
		if (pulseIntervalID) {
			clearInterval(pulseIntervalID);
		}
		localTime = time;

		pulseIntervalID = setInterval(() => {
			localTime--;
		}, 1000);

		pause = false;
	}

	function pauseIntervals() {
		if (epiIntervalID) {
			clearInterval(epiIntervalID);
		}
		if (pulseIntervalID) {
			clearInterval(pulseIntervalID);
		}
	}

	function resumeIntervals() {
		pulseIntervalID = setInterval(() => {
			localTime--;
		}, 1000);

		epiIntervalID = setInterval(() => {
			localTime--;
		}, 1000);
	}

	function restartIntervals() {
		pause = false;
		localTime = time;
		if (rowType == 'pulse') {
			if (pulseIntervalID) {
				clearInterval(pulseIntervalID);
			}
			pulseIntervalID = setInterval(() => {
				localTime--;
			}, 1000);
			return;
		}
		if (epiIntervalID) {
			clearInterval(epiIntervalID);
		}
		epiIntervalID = setInterval(() => {
			localTime--;
		}, 1000);
	}

	restartIntervals();

	$: minutes = Math.floor(localTime / 60);
	$: seconds = Math.round((localTime / 60 - minutes) * 60);
	$: minutes > 0 ? (minutes = minutes) : (minutes = 0);
	$: pause ? pauseIntervals() : '';
</script>

<div class={twMerge('flex w-full flex-col gap-2 px-4', className)}>
	<div id="countdown_and_timer" class="flex w-full flex-col items-center gap-2">
		<div class="w-full text-left">
			<slot name="title" />
		</div>
		{#if displayTime}
			<div id="countdown_and_refresh" class="mb-2 flex w-full items-center gap-4">
				<div
					class="{localTime > 0
						? 'bg-[#4a7845]'
						: 'bg-[#784545]'} flex min-w-[80%] grow items-center whitespace-nowrap rounded-md px-8 py-4 text-5xl text-neutral-100"
				>
					{#if minutes}{minutes} m{/if}

					{seconds >= 10 || seconds < 0 ? seconds : '0' + seconds} s
				</div>
				<div class="flex cursor-pointer items-center" on:keydown on:click={restartIntervals}>
					Reset Timer
				</div>
			</div>
		{/if}
	</div>
	<slot {epiCountDown} {pulseCheckCountDown} />
</div>

<script>
	import {
		Button,
		HT,
		bicarb,
		fluid,
		airway,
		dextrose,
		mag,
		tpa,
		needle,
		pericard,
		ca
	} from '$lib/components/index';

	const HandT = [
		{
			cause: 'Hypoxia',
			treatment: 'Advanced Airway',
			add: () => {
				$airway = [
					...$airway,
					{
						name: 'airway obtained',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Hypovolemia',
			treatment: 'Fluid',
			add: () => {
				$fluid = [
					...$fluid,
					{
						name: 'fluid',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Hydrogen Ion (acidosis)',
			treatment: 'Bicarb',
			add: () => {
				$bicarb = [
					...$bicarb,
					{
						name: 'bicarb',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Hypoglycemia',
			treatment: 'Dextrose',
			add: () => {
				$dextrose = [
					...$dextrose,
					{
						name: 'dextrose',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Hypokalemia',
			treatment: 'Magnesium',
			add: () => {
				$mag = [
					...$mag,
					{
						name: 'magnesium',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Hyperkalemia',
			treatment: 'Calcium',
			add: () => {
				$ca = [
					...$ca,
					{
						name: 'calcium',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Hypothermia',
			treatment: ''
		},
		{
			cause: 'Thrombosis (PE)',
			treatment: 'TPA',
			add: () => {
				$tpa = [
					...$tpa,
					{
						name: 'tpa',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Thrombosis (MI)',
			treatment: ''
		},
		{
			cause: 'Tension Pneumothorax',
			treatment: 'Needle Decompress',
			add: () => {
				$needle = [
					...$needle,
					{
						name: 'needle decompression',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Tamponade',
			treatment: 'Pericardiocentesis',
			add: () => {
				$pericard = [
					...$pericard,
					{
						name: 'pericardiocentesis',
						time: Date.now()
					}
				];
			}
		},
		{
			cause: 'Toxins',
			treatment: ''
		}
	];
</script>

<div class="px-4">
	<div class="flex flex-col">
		{#each HandT as item}
			<HT title={item.cause}>
				{#if item.treatment}
					<Button on:click={item.add}>{item.treatment}</Button>
				{/if}
			</HT>
		{/each}
	</div>
</div>

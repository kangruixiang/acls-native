<script>
	let { test } = $props();
</script>

test in component: {test}

<button on:click={() => test++}>Go up</button>

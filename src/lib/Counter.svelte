<script>
	let counter = 0;
	$: string = `The count is ${counter}`;
	$: if (counter > 5) {
		console.log(`The count is ${counter}`);
	}

	function increment() {
		counter += 1;
	}
</script>

<p>{string}</p>
<p>You have clicked {counter} times.</p>
<button on:click={increment}>Clicks {counter}</button>

<style>
	button {
		padding: 15px 20px;
	}
</style>

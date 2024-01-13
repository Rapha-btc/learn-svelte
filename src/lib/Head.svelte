<script>
	import settings from './stores/settings';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

	{#if $settings.colorScheme === 'dark'}
		<style>
			:root {
				--backgroundColor: #1d1d1d;
				--textColor: #fff;
			}
		</style>
	{:else}
		<style>
			:root {
				--backgroundColor: #ffffff;
				--textColor: #000000;
			}
		</style>
	{/if}
</svelte:head>

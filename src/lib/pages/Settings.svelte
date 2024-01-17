<script>
	import settings from '../stores/settings';
	import direction from '../stores/direction';
</script>

<h2>Settings</h2>

<button
	on:click={() => {
		settings.toggleColorScheme();
	}}>Toggle Color Scheme</button
>

<br />
{$settings.colorScheme}
<br />
{$settings.language}
<button on:click={() => settings.updateSetting('language', 'zenLen ' + Math.random())}
	>Update language</button
>
<button
	on:click={() => {
		settings.reset();
	}}>Reset Settings</button
>
<br />
<label
	><input
		type="radio"
		bind:group={$settings.colorScheme}
		name="colorScheme"
		value="dark"
	/>Dark</label
>
<label
	><input
		type="radio"
		bind:group={$settings.colorScheme}
		name="colorScheme"
		value="light"
	/>Light</label
>

<select bind:value={$settings.language}>
	<option value="en">Englis</option>
	<option value="es">Spanish</option>
	<option value="fr">French</option>
	<option value="ar">Arabic</option>
</select>

<br />
{$direction}

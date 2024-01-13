<script>
	import { onDestroy } from 'svelte';
	import settings from '../stores/settings';
</script>

<h2>Home</h2>

{$settings.colorScheme}

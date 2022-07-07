<script>
	import { onMount } from 'svelte';
	import { DEFAULT_THEME } from './theme/consts';

	let theme = DEFAULT_THEME;
	onMount(() => {
		applyTheme();
	});

	function applyTheme() {
		document
			.getElementsByTagName('html')[0]
			.setAttribute('data-theme', theme);
	}
</script>

<div data-theme={theme}>
	<slot />
</div>

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
	<div class="bg-base-300 rounded-b-box rounded-tr-box relative ">
		<div
			class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 border bg-cover bg-top p-4 undefined"
			style="background-size: 5px 5px;background-image: radial-gradient(hsla(var(--bc)/.2) 0.5px,hsla(var(--b2)/1) 0.5px);"
		>
			<slot />
		</div>
	</div>
</div>

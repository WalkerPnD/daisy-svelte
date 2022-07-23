<script>
	// @ts-check
	import { bindClasses } from '../../utils/bind-classes';

	const prefix = 'hero';
	let className = '';
	export { className as class };
	export let backgroundImage;
	export let contentClass = '';
	export let imgClass = 'bg-opacity-60';

	$: classes = bindClasses([prefix, className]);
	$: heroStyle = backgroundImage
		? `background-image: url(${backgroundImage});`
		: '';
</script>

<div {...$$restProps} class={classes} style={heroStyle}>
	{#if backgroundImage}
		<div class="hero-overlay {imgClass}" />
	{/if}
	<div class="hero-content {contentClass}">
		<slot />
	</div>
</div>

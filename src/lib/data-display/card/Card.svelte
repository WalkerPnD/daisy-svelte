<script>
	import { bindClasses } from '../../utils/bind-classes';
	import { switchClass } from '../../utils/switch-class';
	import { createSwitchClass } from '../../utils/switch-class';

	const prefix = 'card';
	const bodyPrefix = `${prefix}-body`;
	const actionPrefix = `${prefix}-actions`;
	const sw = createSwitchClass(prefix);
	let className = '';
	export { className as class };
	export let bodyClass = '';
	export let actionClass = '';
	export let imgClass = '';
	export let figureClass = '';
	export let topActionClass = '';

	export let title = '';
	export let src = '';
	export let alt = '';
	export let compact = false;
	export let side = false;
	export let lgSide = false;
	export let imgButtom = false;
	export let imgFull = false;
	export let glass = false;

	$: classes = bindClasses([
		prefix,
		className,
		sw(compact, 'compact'),
		sw(side, 'side'),
		switchClass(lgSide, 'lg:card-side'),
		switchClass(imgFull, 'image-full'),
		switchClass(glass, 'glass'),
	]);
	$: _bodyClass = bindClasses([bodyPrefix, bodyClass, ,]);
	$: _actionClass = bindClasses([actionPrefix, actionClass, ,]);
	$: _topActionClass = bindClasses([actionPrefix, topActionClass, ,]);
</script>

<div class={classes}>
	{#if !imgButtom}
		<figure class={figureClass}>
			<img {src} {alt} class={imgClass} />
		</figure>
	{/if}
	<div class={_bodyClass}>
		<div class={_topActionClass}>
			<slot name="top-actions" />
		</div>
		<h2 class="card-title">
			<slot name="title">{title}</slot>
		</h2>
		<slot />
		<div class={_actionClass}>
			<slot name="actions" />
		</div>
	</div>
	{#if imgButtom}
		<figure><img {src} {alt} /></figure>
	{/if}
</div>

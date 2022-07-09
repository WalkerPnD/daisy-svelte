<script>
	// @ts-check
	import { createSwitchClass } from '../../utils/switch-class';
	import { bindClasses } from '../../utils/bind-classes';
	import { optionalClass as op } from '../../utils/optional-class';

	const prefix = 'navbar';
	const psw = createSwitchClass(prefix);
	let className = '';
	export { className as class };
	/**
	 * @type {import('../../params/horizontal-align.const').HAlign}
	 */
	export let hAlign;
	export let start = false;
	export let center = false;
	export let end = false;

	$: classes = bindClasses([
		prefix,
		op(hAlign),
		psw(start, 'start'),
		psw(center, 'center'),
		psw(end, 'end'),
		className,
	]);
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>

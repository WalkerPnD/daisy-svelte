<script>
	// @ts-check
	import { bindClasses } from '../../utils/bind-classes';
	import { createSwitchClass } from '../..//utils/switch-class';
	import { createOptionalClass } from '../../utils/optional-class';

	const prefix = 'btn';
	const op = createOptionalClass(prefix);
	const psw = createSwitchClass(prefix);
	const sw = createSwitchClass();
	let className = '';
	export { className as class };

	/**
	 * @type {import('../../params/color.const').Color}
	 */
	export let color;
	/**
	 * @type {import('../../params/size.const').Size}
	 */
	export let size;
	export let isLoading = false;
	export let outline = false;
	export let glass = false;
	export let noAnimation = false;
	export let ghost = false;
	export let wide = false;
	export let block = false;
	export let circle = false;
	export let square = false;
	export let label;

	$: classes = bindClasses([
		prefix,
		className,
		op(color),
		op(size),
		sw(outline, 'outline'),
		sw(glass, 'glass'),
		sw(isLoading, 'loading'),
		sw(noAnimation, 'no-animation'),
		psw(ghost, 'ghost'),
		psw(wide, 'wide'),
		psw(block, 'block'),
		psw(circle, 'circle'),
		psw(square, 'square'),
	]);
</script>

<button {...$$restProps} class={classes} on:click on:change>
	<slot>
		{label || 'Button'}
	</slot>
</button>

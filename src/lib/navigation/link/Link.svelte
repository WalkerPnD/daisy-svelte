<script>
	// @ts-check
	import { bindClasses } from '../../utils/bind-classes';
	import { createSwitchClass } from '../..//utils/switch-class';
	import { createOptionalClass } from '../../utils/optional-class';

	/**
	 * @type {('link'|'btn')} type
	 */
	export let prefix = 'link';
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
	export let hover = false;
	export let isLoading = false;
	export let glass = false;
	export let noAnimation = false;
	export let ghost = false;
	export let wide = false;
	export let block = false;
	export let circle = false;
	export let square = false;
	export let label;

	$: classes = switchPrefix(prefix);

	function switchPrefix(_prefix) {
		const op = createOptionalClass(prefix);
		const psw = createSwitchClass(prefix);
		const sw = createSwitchClass();
		if (prefix === 'link') {
			return bindClasses([
				prefix,
				className,
				op(color),
				psw(hover, 'hover'),
			]);
		}
		return bindClasses([
			prefix,
			className,
			op(color),
			op(size),
			sw(glass, 'glass'),
			sw(isLoading, 'loading'),
			sw(noAnimation, 'no-animation'),
			psw(ghost, 'ghost'),
			psw(wide, 'wide'),
			psw(block, 'block'),
			psw(circle, 'circle'),
			psw(square, 'square'),
		]);
	}
</script>

<a {...$$restProps} class={classes}>
	<slot>
		{label || 'Button'}
	</slot>
</a>

<script>
	import { bindClasses } from '../../utils/bind-classes';
	import { optionalClass as op } from '../../utils/optional-class';

	const prefix = 'navbar';
	let className = '';
	export { className as class };
	/**
	 * @type {import('../../params/horizontal-align.const').HorizontalAlign}
	 */
	export let hAlign;

	$: classes = bindClasses([prefix, op(hAlign), className]);
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>

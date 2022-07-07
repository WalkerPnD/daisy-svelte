<script>
	import { bindClasses } from '../../utils/bind-classes';
	import { optionalClass as op } from '../../utils/optional-class';

	const prefix = 'btn';
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
	export let active = false;
	export let isLoading = false;
	export let glass = false;
	export let noAnimation = false;
	export let ghost = false;
	export let wide = false;
	export let block = false;
	export let circle = false;
	export let square = false;
	export let label;

	$: classes = bindClasses([prefix, op(color), op(size), className]);
</script>

<button
	{...$$restProps}
	class={classes}
	class:btn-active={active}
	class:btn-ghost={ghost}
	class:glass
	class:loading={isLoading}
	class:no-animation={noAnimation}
	class:btn-block={block}
	class:btn-circle={circle}
	class:btn-wide={wide}
	class:btn-square={square}
	on:click
	on:change
>
	<slot>
		{label || 'Button'}
	</slot>
</button>

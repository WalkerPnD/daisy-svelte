<script>
	import { Color } from '../../params/color.const';
	import { Size } from '../../params/size.const';

	let className = '';

	export let label;
	/**
	 * @type {import('../../params/color.const').Color}
	 */
	export let color;
	export let ghost = false;
	export let link = false;
	export let outline = false;
	export let disabled = false;
	export let glass = false;
	export let loading = false;
	export let noAnimation = false;
	export let active = false;
	/**
	 * @type {import('../../params/size.const').Size}
	 */
	export let size;
	export let wide = false;
	export let block = false;
	export let circle = false;
	export let square = false;
	export { className as class };
</script>

<button
	{...$$restProps}
	class="btn {className}"
	class:btn-active={active}
	class:btn-primary={color === Color.primary}
	class:btn-secondary={color === Color.secondary}
	class:btn-accent={color === Color.accent}
	class:btn-info={color === Color.info}
	class:btn-success={color === Color.success}
	class:btn-warning={color === Color.warning}
	class:btn-error={color === Color.error}
	class:btn-ghost={ghost}
	class:btn-link={link}
	class:btn-outline={outline}
	class:btn-disabled={disabled}
	class:glass
	class:loading
	class:no-animation={noAnimation}
	class:btn-xs={size === Size.xs}
	class:btn-sm={size === Size.sm}
	class:btn-md={size === Size.md}
	class:btn-lg={size === Size.lg}
	class:btn-wide={wide}
	class:btn-block={block}
	class:btn-circle={circle}
	class:btn-square={square}
	on:click
	on:change
>
	<slot>
		{label || 'Button'}
	</slot>
</button>

<script>
	import { bindClasses } from '../../utils/bind-classes';
	import { optionalClass as op } from '../../utils/optional-class';

	const prefix = 'dropdown';
	let className = '';
	export { className as class };
	/**
	 * @type {import('../../params/direction.const').Direction}
	 */
	export let direction;
	export let end = false;
	export let open = false;
	export let label;

	$: classes = bindClasses([prefix, op(direction), className]);
</script>

<div
	{...$$restProps}
	class={classes}
	class:dropdown-end={end}
	class:dropdown-open={end}
>
	<label tabindex="0" class="btn m-1">
		<slot name="label">
			{label}
		</slot>
	</label>
	<ul
		tabindex="0"
		class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
	>
		<slot />
	</ul>
</div>

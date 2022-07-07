<script>
	import { bindClasses } from '../../utils/bind-classes';
	const prefix = 'breadcrumbs';

	let className = '';
	export { className as class };
	// export let itens = [];

	$: classes = bindClasses([prefix, className]);
</script>

<div {...$$restProps} class={classes}>
	<ul>
		<slot />
	</ul>
	<!-- {#if Array.isArray(itens) && itens.length > 0}
		<ul>
			{#each itens as item}
				<li class="relative bg-light simple-list">
					<slot {item} name="item" />
				</li>
			{/each}
		</ul>
	{/if} -->
</div>

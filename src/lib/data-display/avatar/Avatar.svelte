<script>
	import { bindClasses } from '../../utils/bind-classes';
	import { switchClass } from '../..//utils/switch-class';

	const prefix = 'avatar';
	let className = '';
	export { className as class };

	export let src = '';
	export let alt = '';
	export let online = false;
	export let offline = false;

	$: classes = bindClasses([
		prefix,
		className,
		switchClass(online, 'online'),
		switchClass(offline, 'offline'),
	]);

	export let placeholder = '';
	export let phClass = '';
</script>

<div class="avatar" class:placeholder={!!placeholder}>
	<div class={classes}>
		<slot>
			<img {src} {alt} />
			{#if placeholder}
				<span class={phClass}>placeholder</span>
			{/if}
		</slot>
	</div>
</div>

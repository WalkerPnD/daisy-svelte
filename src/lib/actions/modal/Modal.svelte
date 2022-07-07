<script>
	// @ts-check
	import { bindClasses } from '../../utils/bind-classes';

	const prefix = 'modal';
	let className = '';
	export let isOpen = false;
	export let backdrop = true;

	$: classes = bindClasses([prefix, className]);

	function closeModal() {
		if (backdrop) {
			isOpen = false;
		}
	}
</script>

<div class={classes} class:modal-open={isOpen} on:click={closeModal}>
	<div class="modal-box">
		<slot />
	</div>
</div>

<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '../button/Button.svelte';
	import Modal from './Modal.svelte';

	let isOpen = false;
	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Actions/Modal"
	component={Modal}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Modal {...args} />
</Template>

<Story name="Modal menu">
	<Button on:click={toggleOpen} />
	<Modal label="Click" bind:isOpen>
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to
			use Wikipedia for free!
		</p>
		<div class="modal-action">
			<Button on:click={toggleOpen} label="YAY!" />
		</div>
	</Modal>
</Story>

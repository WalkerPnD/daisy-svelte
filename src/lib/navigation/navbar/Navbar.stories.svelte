<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from './Navbar.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Navigation/Navbar"
	component={Navbar}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Navbar {...args}>
		<slot />
	</Navbar>
</Template>

<Story name="Navbar with title only">
	<Navbar class="bg-base-100">
		<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</Navbar>
</Story>
<Story
	name="John"
	args={{
		text: 'John',
		textColor: 'rgb(71, 134, 155)',
	}}
/>

<Story
	name="Jina"
	args={{
		text: 'Jina',
		textColor: 'rgb(169, 169, 169)',
	}}
/>

<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Actions/Button"
	component={Button}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Button {...args} />
</Template>

<Story
	name="Jane"
	args={{
		text: 'Jane',
		textColor: 'rgb(173, 216, 230)',
	}}
/>

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

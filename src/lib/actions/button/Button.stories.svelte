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
		label: 'Jane',
		textColor: 'rgb(173, 216, 230)',
	}}
/>

<Story name="outline">
	<Button label="Button" outline />
	<Button label="Button" color="primary" outline />
</Story>

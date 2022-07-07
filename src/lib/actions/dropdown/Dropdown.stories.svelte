<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Dropdown from './Dropdown.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Actions/Dropdown"
	component={Dropdown}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Dropdown {...args} />
</Template>

<Story name="Dropdown menu">
	<Dropdown label="Click">
		<li><a>Item 1</a></li>
		<li><a>Item 2</a></li>
	</Dropdown>
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

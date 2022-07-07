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

<script>
	import { Size } from '../../params/size.const';

	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Actions/Button"
	component={Button}
	argTypes={{
		label: { control: 'text', default: 'Button2' },
		size: {
			control: {
				type: 'inline-radio',
				options: Object.keys(Size).map((it) => it),
			},
		},
	}}
/>

<Template let:args>
	<div>
		<Button {...args} />
		<Button {...args} color="primary" />
		<Button {...args} color="secondary" />
		<Button {...args} color="accent" />
		<Button {...args} ghost />
		<Button {...args} link />
	</div>
	<div class="mt-3">
		<Button {...args} outline />
		<Button {...args} color="primary" outline />
		<Button {...args} color="secondary" outline />
		<Button {...args} color="accent" outline />
		<Button {...args} ghost outline />
		<Button {...args} link outline />
	</div>
	<hr class="m-3" />
	<div>
		<Button {...args} color="info" />
		<Button {...args} color="success" />
		<Button {...args} color="warning" />
		<Button {...args} color="error" />
	</div>
	<div class="mt-3">
		<Button {...args} color="info" outline />
		<Button {...args} color="success" outline />
		<Button {...args} color="warning" outline />
		<Button {...args} color="error" outline />
	</div>
</Template>

<Story name="Buttons with brand colors" label="Button" />

<Story name="outline">
	<Button outline />
	<Button color="primary" outline />
</Story>

<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Link from './Link.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Navigation/Link"
	component={Link}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Link {...args} />
</Template>

<Story name="Jane">
	<Link label="Jane" href="#" />
	<Link prefix="btn" label="Jane" href="#" />
</Story>

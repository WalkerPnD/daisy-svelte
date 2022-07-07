<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Navigation/Breadcrumbs"
	component={Breadcrumbs}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Breadcrumbs {...args}>
		<slot />
	</Breadcrumbs>
</Template>

<Story name="Breadcrumbs with title only">
	<Breadcrumbs class="bg-base-100">
		<li><a>Home</a></li>
		<li><a>Documents</a></li>
		<li>Add Document</li>
	</Breadcrumbs>
</Story>

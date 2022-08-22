<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '../../actions/button/Button.svelte';
	import Card from './Card.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Data display/Card"
	component={Card}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Card {...args} />
</Template>

<Story name="Basic">
	<Card
		title="Shoes!"
		src="https://placeimg.com/400/225/arch"
		class="w-96 bg-base-100 shadow-xl"
		actionClass="justify-end"
	>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Buy Now</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Compact card">
	<Card
		compact
		title="Shoes!"
		src="https://placeimg.com/400/225/arch"
		class="w-96 bg-base-100 shadow-xl"
		actionClass="justify-end"
	>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Buy Now</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Card with badge">
	<Card
		src="https://placeimg.com/400/225/arch"
		class="w-96 bg-base-100 shadow-xl"
		actionClass="justify-end"
	>
		<svelte:fragment slot="title">
			Shoes!
			<div class="badge badge-secondary">NEW</div>
		</svelte:fragment>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<svelte:fragment slot="actions">
			<div class="badge badge-outline">Fashion</div>
			<div class="badge badge-outline">Products</div>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Card with bottom image">
	<Card
		imgButtom
		title="Shoes!"
		src="https://placeimg.com/400/225/arch"
		class="w-96 bg-base-100 shadow-xl"
		actionClass="justify-end"
	>
		<p>If a dog chews shoes whose shoes does he choose?</p>
	</Card>
</Story>

<Story name="Card with centered content and paddings">
	<Card
		src="https://placeimg.com/400/225/arch"
		title="Shoes!"
		class="w-96 bg-base-100 shadow-xl"
		figureClass="px-10 pt-10"
		imgClass="rounded-xl"
		bodyClass="items-center text-center"
		actionClass="justify-end"
	>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Buy Now</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Card with image overlay">
	<Card
		src="https://placeimg.com/400/225/arch"
		title="Shoes!"
		imgFull
		class="w-96 bg-base-100 shadow-xl"
		actionClass="justify-end"
	>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Buy Now</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Card with no image">
	<Card
		title="Shoes!"
		class="w-96 bg-base-100 shadow-xl"
		actionClass="justify-end"
	>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Buy Now</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Card with custom color">
	<Card
		title="Shoes!"
		class="w-96 bg-primary text-primary-content"
		actionClass="justify-end"
	>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<svelte:fragment slot="actions">
			<Button>Buy Now</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Centered card with neutral color">
	<Card
		title="Shoes!"
		class="w-96 bg-neutral text-neutral-content"
		bodyClass="items-center text-center"
		actionClass="justify-end"
	>
		<p>We are using cookies for no reason.</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Accept</Button>
			<Button ghost>Deny</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Card with action on top">
	<Card class="w-96 bg-base-100 shadow-xl" topActionClass="justify-end">
		<svelte:fragment slot="top-actions">
			<Button square size="sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/></svg
				>
			</Button>
		</svelte:fragment>
		<p>We are using cookies for no reason.</p>
	</Card>
</Story>

<Story name="Card glass">
	<Card
		class="w-96"
		glass
		title="Life hack"
		src="https://placeimg.com/400/225/arch"
		actionClass="justify-end"
	>
		<p>How to park your car at your garage?</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Learn Now!</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story name="Card with image on side">
	<Card
		class="bg-base-100 shadow-xl"
		glass
		side
		src="https://placeimg.com/200/280/arch"
		title="New movie is released!"
	>
		<p>Click the button to watch on Jetflix app.</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Watch</Button>
		</svelte:fragment>
	</Card>
</Story>

<Story
	name="Responsive card (vertical on small screen, horizontal on large screen)"
>
	<Card
		class="bg-base-100 shadow-xl"
		glass
		lgSide
		src="https://placeimg.com/400/400/arch"
		title="New movie is released!"
	>
		<p>Click the button to listen on Spotiwhy app.</p>
		<svelte:fragment slot="actions">
			<Button color="primary">Listen</Button>
		</svelte:fragment>
	</Card>
</Story>

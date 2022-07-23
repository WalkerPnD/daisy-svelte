<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Hero from './Hero.svelte';
	import Button from '../../actions/button/Button.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Layout/Hero"
	component={Hero}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Hero {...args} />
</Template>

<Story name="Centered hero">
	<Hero class="min-h-screen bg-base-200" contentClass="text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Hello there</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut
				assumenda excepturi exercitationem quasi. In deleniti eaque aut
				repudiandae et a id nisi.
			</p>
			<Button color="primary" label="Get Started" />
		</div>
	</Hero>
</Story>

<Story name="Hero with figure">
	<Hero class="min-h-screen bg-base-200" contentClass="flex-col lg:flex-row">
		<img
			src="https://placeimg.com/260/400/arch"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="demo img"
		/>
		<div>
			<h1 class="text-5xl font-bold">Box Office News!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut
				assumenda excepturi exercitationem quasi. In deleniti eaque aut
				repudiandae et a id nisi.
			</p>
			<Button color="primary" label="Get Started" />
		</div>
	</Hero>
</Story>

<Story name="Hero with figure but reverse order">
	<Hero
		class="min-h-screen bg-base-200"
		contentClass="flex-col lg:flex-row lg:flex-row-reverse"
	>
		<img
			src="https://placeimg.com/260/400/arch"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="demo img"
		/>
		<div>
			<h1 class="text-5xl font-bold">Box Office News!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut
				assumenda excepturi exercitationem quasi. In deleniti eaque aut
				repudiandae et a id nisi.
			</p>
			<Button color="primary" label="Get Started" />
		</div>
	</Hero>
</Story>

<Story name="Hero with form">
	<Hero
		class="min-h-screen bg-base-200"
		contentClass="flex-col lg:flex-row lg:flex-row-reverse"
	>
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut
				assumenda excepturi exercitationem quasi. In deleniti eaque aut
				repudiandae et a id nisi.
			</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<label class="label">
						<span class="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="email"
						class="input input-bordered"
					/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Password</span>
					</label>
					<input
						type="text"
						placeholder="password"
						class="input input-bordered"
					/>
					<label class="label">
						<a href="#" class="label-text-alt link link-hover"
							>Forgot password?</a
						>
					</label>
				</div>
				<div class="form-control mt-6">
					<Button color="primary" label="Log in" />
				</div>
			</div>
		</div>
	</Hero>
</Story>

<Story name="Hero with overlay image">
	<Hero
		class="min-h-screen bg-base-200"
		contentClass="text-center text-neutral-content"
		backgroundImage="https://placeimg.com/1000/800/arch"
	>
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut
				assumenda excepturi exercitationem quasi. In deleniti eaque aut
				repudiandae et a id nisi.
			</p>
			<Button color="primary" label="Get Started" />
		</div>
	</Hero>
</Story>

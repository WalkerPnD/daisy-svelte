<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta title="Introduction" parameters={{ viewMode: 'story' }} />

<Template let:args>
	<Button {...args} />
</Template>

<Story name="About Daisy Svelte">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">
					Svelte compolents for Daisy UI.
				</h1>
				<div class="py-6">
					<article class="break-words prose">
						<div>
							<a
								href="https://daisyui.com/"
								target="_blank"
								class="link text-primary"
								>[Official] Daisy UI https://daisyui.com/</a
							>
						</div>
						You need to setup Daisy UI in your project to use these components.
						<br />
						See the the examples for svelte, sveltekit and svelte with
						roll-up in the link below.
						<a
							href="https://daisyui.com/docs/install/"
							class="link text-primary"
							target="_blank"
							>[Official] Install daisyUI as a Tailwind CSS plugin</a
						>
					</article>
				</div>
				<button class="btn btn-primary">Get Started(WIP)</button>
			</div>
		</div>
	</div>
	<div class="prone">
		Github: <a
			class="link text-primary"
			href="https://github.com/walker-walks/daisy-svelte"
			>https://github.com/walker-walks/daisy-svelte</a
		>
	</div>
</Story>

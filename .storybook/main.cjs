const preprocess = require('svelte-preprocess');

module.exports = {
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite',
	},
	stories: [
		'./**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)',
		'./**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
		'storybook-addon-themes',
		'@storybook/addon-storysource',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	svelteOptions: {
		preprocess: preprocess({
			postcss: true,
			typescript: true,
		}),
	},
};

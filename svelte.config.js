import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		defaults: {
			style: 'postcss',
		},
		postcss: true,
	}),

	kit: {
		target: '#svelte',
		package: {
			files(filepath) {
				return !filepath.endsWith('.stories.svelte');
			},
		},
	},
};

export default config;

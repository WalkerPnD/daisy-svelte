module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	purge: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html',
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [require('daisyui')],
};

import { addParameters } from '@storybook/client-api';
import Preview from './preview.svelte';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
// addParameters({
// 	viewMode: 'docs',
// });

export const decorators = [() => Preview];

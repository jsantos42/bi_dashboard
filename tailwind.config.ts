import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				mobile: '1fr',
				desktop: 'repeat(auto-fit, minmax(350px, 1fr))',
			},
		},
	},
	plugins: [],
};
export default config;

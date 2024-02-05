import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				theme: 'rgba(var(--background-rgb))',
				highlight: 'rgba(var(--background-highlight-rgb))',
			},
			colors: {
				theme: 'rgba(var(--foreground-rgb))',
				themeHighlight: 'rgba(var(--foreground-highlight-rgb))',
				contrast: 'rgba(var(--background-rgb))',
			},
			gridTemplateColumns: {
				mobile: '1fr',
				desktop: 'repeat(auto-fit, minmax(350px, 1fr))',
			},
		},
	},
	plugins: [],
};
export default config;

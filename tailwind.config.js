/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#65a30d',
					secondary: '#a16207',
					accent: '#fde047',
					neutral: '#ffffff',
					'base-100': '#f3f4f6',
					info: '#cffafe',
					success: '#ecfccb',
					warning: '#fb923c',
					error: '#ef4444'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};

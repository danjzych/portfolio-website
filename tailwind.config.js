/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				iceberg: {
					50: '#f2fbf9',
					100: '#d5f3ed',
					200: '#a9e6db',
					300: '#76d2c4',
					400: '#4ab7aa',
					500: '#319b91',
					600: '#257c76',
					700: '#216460',
					800: '#1e514e',
					900: '#1d4441',
					950: '#0c2727',
				},
			},
		},
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
					error: '#ef4444',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};

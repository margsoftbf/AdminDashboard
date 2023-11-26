/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
			},
			colors: {
				darkGray: '#1f1e26',
				lightGray: '#28272e',
				lighterGray: '#4e4c57',
				darkViolet: '#4253d6',
				lightViolet: '#6270ec',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

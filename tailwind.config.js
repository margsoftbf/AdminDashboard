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
				lightGray: '#1F2128',
				myGreen: '#50D1B2',
				myPink: '#DD50D6',
				borderGray: '#313442',
				lighterGray: '#4e4c57',
				darkViolet: '#7747CA',
				lightViolet: '#7364DB',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

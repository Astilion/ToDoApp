/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			height: {
				"screen": "100dvh",
				"screen-small": "100svh",
				"screen-large": "100lvh",
			},
		},
	},
	plugins: [],
};

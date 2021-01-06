module.exports = {
	theme: {
		colors: {
			white: "#FFFFFF",
			blue: "#33A6BA",
			yellow: "#FFC062",
			red: "#FF7B92",
			grey: {
				100: "#E8EDF3",
				200: "#989EA7",
				300: "#313E4F"
			}
		},
		fontFamily: {
			sans: ["Proxima Nova", "Poppins", "Helvetica", "Arial", "sans-serif"]
		},
		boxShadow: {
			micro: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
			base:
				"0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);"
		}
	},
	variants: {},
	plugins: [],
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: [
			"components/**/*.vue",
			"layouts/**/*.vue",
			"pages/**/*.vue",
			"plugins/**/*.js",
			"nuxt.config.js"
		]
	}
};

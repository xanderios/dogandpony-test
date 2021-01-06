export default {
	mode: "universal",

	/*
	 * Headers of the page
	 */
	head: {
		title: "DPS Senior Front-End Test",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || ""
			}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"'
			}
		]
	},

	/*
	 * Plugins to load before mounting the App
	 */
	plugins: ["~/plugins/vee-validate.js", "~/plugins/vue-mask.js"],
	build: {
		transpile: ["vee-validate/dist/rules"],
		extend(config, ctx) {}
	},

	/*
	 * Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		"@nuxtjs/tailwindcss"
	],

	/*
	 * Nuxt.js modules
	 */
	modules: []

	/*
	 * Build configuration
	 */
};

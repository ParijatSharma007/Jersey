import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
	images: {
		domains: ["tailwindui.com", "images.unsplash.com", "cdn.shopify.com"],
	},
	env: {
		SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
		SHOPIFY_SECRET: process.env.SHOPIFY_SECRET,
		HOSTNAME: process.env.HOSTNAME,
		SHOPIFY_DOMAIN: process.env.SHOPIFY_DOMAIN,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.graphql$|\.gql$/,
			exclude: /node_modules/,
			use: {
				loader: "graphql-tag/loader",
			},
		});
		return config;
	},
});

export default nextConfig;

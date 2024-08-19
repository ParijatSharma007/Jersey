// import { LATEST_API_VERSION } from "@shopify/shopify-api";
// import axios from "axios";
// import env_vars from "constant/env_vars";
// import { DocumentNode } from "graphql";

// const url = `https://${env_vars.SHOPIFY_DOMAIN}/api/${LATEST_API_VERSION}/graphql.json`;

// export const shopifyGraphQL = async <T>(
// 	query: DocumentNode,
// 	variables: Object = {}
// ) => {
// 	try {
// 		const response = await axios({
// 			url,
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				"X-Shopify-Storefront-Access-Token": env_vars.SHOPIFY_API_KEY,
// 			},
// 			data: JSON.stringify({ query, variables }),
// 		});

// 		return response.data.data as T;
// 	} catch (error) {
// 		console.log("Shopify GraphQL API Error:", error);
// 		// throw new Error("Failed to fetch data from Shopify API");
// 		return undefined
// 	}
// };



import { LATEST_API_VERSION } from '@shopify/shopify-api';
import {createStorefrontApiClient} from '@shopify/storefront-api-client';
import env_vars from 'constant/env_vars';

const client = createStorefrontApiClient({
  storeDomain: env_vars.SHOPIFY_DOMAIN,
  apiVersion: LATEST_API_VERSION,
  publicAccessToken: env_vars.SHOPIFY_API_KEY,
});

export default client


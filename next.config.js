/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STROEFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRON_ACCESSTOKEN
  },
  image: {
    domains: ['cdn.shopify.com']
  }

}


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Support for reverse proxy - reads from env or defaults to root
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    };

    return config;
  },
}

module.exports = nextConfig

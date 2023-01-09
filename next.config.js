/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  eslint: {
    /**
     * Check the app directory for eslint
     * https://github.com/vercel/next.js/pull/44426
     */
    dirs: ["pages", "app", "components", "lib", "src"]
  }
}

module.exports = nextConfig

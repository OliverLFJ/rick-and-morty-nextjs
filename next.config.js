/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com']
  },
  ...withOptimizedImages({
    handleImages: ['jpeg', 'png', 'svg'],
  }),
}

module.exports = nextConfig
c
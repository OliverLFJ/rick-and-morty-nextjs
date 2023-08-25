/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com']
  },
}

module.exports = nextConfig
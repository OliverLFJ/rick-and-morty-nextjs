const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
    plugins: [
      import('imagemin-mozjpeg').then((imageminMozjpeg) => {
        return imageminMozjpeg.default({
          quality: 50,
        });
      }),
    ],
  },
  optimizeImages: true,
  responsive: {
    adapter: require.resolve('responsive-loader/sharp'),
  },
};

module.exports = withOptimizedImages(nextConfig);

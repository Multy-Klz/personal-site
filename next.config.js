/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: { unoptimized: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  };

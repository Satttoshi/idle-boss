/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    config.resolve.alias["~"] = path.resolve(__dirname);

    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);

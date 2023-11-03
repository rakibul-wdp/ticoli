/** @type {import('next').NextConfig} */
const nextConfig = {
  //assetPrefix: "https://www.ticoli.com/test",
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

module.exports = {
  output: 'export',
  basePath: '/chadl22.github.io', // Replace with your repository name if different
  assetPrefix: '/chadl22.github.io/',
};

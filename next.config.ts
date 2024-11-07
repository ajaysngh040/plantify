import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'www.flaticon.com'
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com'
      },
    ]
  }
};

export default nextConfig;

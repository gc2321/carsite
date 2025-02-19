import type { NextConfig } from "next";

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.pixabay.com' }
    ]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rab-import-assets.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'summerlove.lat',
        pathname: '/img/**',
      },
      {
        protocol:'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
};


export default nextConfig;

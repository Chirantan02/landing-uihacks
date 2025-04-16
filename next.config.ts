import { withAxiom } from 'next-axiom';
import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.Zeneca.com', 'images.Zeneca.com'],
  },
  trailingSlash: true,
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/auth/:path*',
      destination: '/api/auth/:path*',
    },
  ],
} as const;

export default withAxiom(nextConfig);

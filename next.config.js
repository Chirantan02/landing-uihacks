/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;

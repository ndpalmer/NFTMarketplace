/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.infura.io'],
  },
  env: {
    projectId: '2DrchQRnNLAZrkdScfmMm7Q45li',
    projectSecret: 'bd3b9450feee1a15c9ca6c5ecdc34b17',
  },
};

module.exports = nextConfig;

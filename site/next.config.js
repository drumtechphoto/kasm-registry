/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'drumtechphoto',
    description: 'The official store for drumtechphoto.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/drumtechphoto/kasm-registry/',
    contactUrl: 'https://drumtechphoto.com/contact',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

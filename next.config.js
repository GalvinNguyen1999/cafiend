/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com',
        port: '',
        pathname: '/643cd7a284ea6a516516b964/**'
      }
    ],
    domains: ['uploads-ssl.webflow.com']
  },
  reactStrictMode: true
}

module.exports = nextConfig

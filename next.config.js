/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sunniekapar.github.io',
        port: '',
        pathname: '/portfolio/**',
      },
    ],
  },
}
 
module.exports = nextConfig
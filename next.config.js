/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'http://127.0.0.1:3000/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'http://localhost:8080/:path*',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig

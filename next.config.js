/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.rawg.io',
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
          }
        ],
    },
}

module.exports = nextConfig

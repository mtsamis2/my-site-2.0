/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/9h0x5en6hj8l/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/posts/:oldPath/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
      {
        source: '/categories/:oldPath/:slug',
        destination: '/categories/:slug',
        permanent: true,
      }
    ]
  },
}

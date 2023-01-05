/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://paragon-openedx.netlify.app/:path*',
        permanent: true,
      },
    ];
  },
}

const withTM = require('next-transpile-modules')(['@edx/paragon']);// pass the modules you would like to see transpiled
module.exports = withTM(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['@edx/paragon']); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);

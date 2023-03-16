/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["static.vecteezy.com", "cdn.sanity.io", "favicon.ico"],
  },
};

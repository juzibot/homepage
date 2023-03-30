const { i18n } = require('./next-i18next.config');
const dotenv = require('dotenv');
dotenv.config();

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['cdn-official-website.juzibot.com'],
  },
  assetPrefix: "/enStatic",
  async redirects() {
    return [
      {
        source: '/join-us',
        destination: 'https://juzihudong.jobs.feishu.cn/juzibot',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
};

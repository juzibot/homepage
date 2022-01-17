const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: '/join-us',
        destination: 'https://k0auuqcihb.jobs.feishu.cn/juzibot',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about-us',
        permanent: true,
      }
    ]
  }
}
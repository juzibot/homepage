const path = require("path/posix");

module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localePath: path.resolve('./public/locales')
  },
};
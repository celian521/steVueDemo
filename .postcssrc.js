// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['iOS 6', '> 0.1%', 'android 2.1']
    },
    "postcss-pxtorem": {
      rootValue: 100,
      propWhiteList: [],
      selectorBlackList: [
        'minirefresh'
      ]
    }
  }
}

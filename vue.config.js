module.exports = {
  pwa: {
    themeColor: '#000',
    name: 'orafal.dev'
  },
  css: {
    modules: true,
    loaderOptions: {
      css: {
        localIdentName: "[local]--[sha512:hash:base64:4]",
        camelCase: "only"
      }
    }
  }
};

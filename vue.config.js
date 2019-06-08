const webpack = require('webpack');

module.exports = {
  lintOnSave: false,
  publicPath: '/',
  chainWebpack: (config) => {
    config.output
      .globalObject('this');
    config.plugin('conditional-build').use(webpack.NormalModuleReplacementPlugin, [
      /(.*)-APP_TARGET(\.*)/,
      (resource) => {
        resource.request = resource.request.replace(/-APP_TARGET/, `-${process.env.APP_TARGET || 'APP'}`);
      },
    ]);
  },
  pwa: {
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    themeColor: '#424242',
    appleMobileWebAppCapable: 'yes',
    name: 'Conditional Clobber',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png',
    },
  },
};

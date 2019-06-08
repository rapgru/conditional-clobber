const webpack = require('webpack');

module.exports = {
  lintOnSave: false,
  publicPath: '',
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
  },
};

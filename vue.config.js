const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  lintOnSave: false,
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
  },
  chainWebpack: (config) => {
    config.output
      .globalObject('this');
  },
};

module.exports = {
  lintOnSave: false,
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
  },
  /* chainWebpack: (config) => {
    config.module
      .rule('workerize')
      .test(/\.worker\.js$/)
      .use('workerize-loader')
      .loader('workerize-loader')
      .end();
  }, */
  chainWebpack: (config) => {
    config.output
      .globalObject('this');
  },
};

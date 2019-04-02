module.exports = {
  lintOnSave: false,
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
  },
  chainWebpack: (config) => {
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .tap(options => ({ inline: true }))
      .end();
  },
};

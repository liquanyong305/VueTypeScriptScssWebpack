
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('html')
      .test('/\.html$/')
      .use('html-loader')
        .loader('html-loader')
        .options({
          minimize: false
        })
        .end()
    config.module
      .rule('vueLoader')
      .test('/\.vue$/')
      .use('vue-loader')
      .loader('vue-loader')
      .options({})
      .end()
  },
  // 配置高于chainWebpack中关于 css loader 的配置
  // css: {
  //   // 是否开启支持 foo.module.css 样式
  //   modules: false,

  //   // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
  //   extract: true,

  //   // 是否构建样式地图，false 将提高构建速度
  //   sourceMap: false,

  //   // css预设器配置项
  //   loaderOptions: {
  //     css: {
  //       // options here will be passed to css-loader
  //     },

  //     postcss: {
  //       // options here will be passed to postcss-loader
  //     }
  //   }
  // },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,

    host: '127.0.0.1',

    port: 3000,

    https: false,

    hotOnly: false,

    proxy: null,

    before: app => {
    }
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
};
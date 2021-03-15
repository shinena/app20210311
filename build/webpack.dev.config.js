const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = webpackMerge.merge(baseWebpackConfig, {
  // 指定环境
  mode: "development",
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve('./../dist/index.html'),
      template: 'index.html',
      inject: true,
    })
  ],
  // 开发环境本地启动都服务配置
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: false,
    compress: true,
    port: '8081',
    publicPath: '/',
    proxy: {
      // 接口请求代理
      "/api": {
        secure: false,
        target: 'http://127.0.0.1:8082'
      }
    }
  }
})
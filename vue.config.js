const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const webpack = require('webpack')
module.exports = {
  configureWebpack: config => {
    config.plugins.push(AutoImport({
      resolvers: [ElementPlusResolver()],
    }))
    config.plugins.push(Components({
      resolvers: [ElementPlusResolver()],
    }))
  },devServer: {
    https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://150.158.214.20:8880/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: { // 全局使用css变量
     loaderOptions: {
       sass: {
         additionalData:
         `
           @import "@/styles/variables.scss";  // scss文件地址
           @import "@/styles/mixin.scss";     // scss文件地址
         `
       }
     }
   }
}
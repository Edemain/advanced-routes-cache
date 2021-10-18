const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  configureWebpack: {
    // 这个配置是解决命令行的一个警告bug, 等待官方修复后可以不添加
    module: {
      unknownContextCritical: false
    },
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  devServer: {
    proxy: {
      "^/apis": {
        target: "http://152.136.185.210:5000",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/apis": ""
        }
      }
    }
  }
};

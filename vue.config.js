// vue.config.js for less-loader@6.0.0
module.exports = {
  // 打包路径
  publicPath: "./",
  // 输出目录
  outputDir: "dist",
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          // include: [
          //     resolve("/node_modules/dom7"),
          //     resolve("/node_modules/weui")
          // ],
          // exclude: /(node_modules)/,
          loader: "babel-loader",
          // query: {
          //     presets: ['latest']
          // }
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // "primary-color": "#52954b",
            // "link-color": "#52954b",
            // "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};

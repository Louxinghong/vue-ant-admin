// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const externals = require("./externals");
const isProduct = process.env.NODE_ENV !== "development";

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: "babel-loader",
        },
      ],
    },
    // plugins: [new BundleAnalyzerPlugin()],
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
  pluginOptions: {
    externals: isProduct ? externals : {},
    lintStyleOnBuild: true,
  },
};

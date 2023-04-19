const { merge } = require("webpack-merge");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "production",
  devtool: false,
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
});

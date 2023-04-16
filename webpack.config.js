const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/_redirects", to: "" },
        { from: "public/robots.txt", to: "robots.txt" },
        { from: "public/icons.svg", to: "" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(jpg|png|webp|ico|svg)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@commands": path.resolve(__dirname, "src/commands"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styled": path.resolve(__dirname, "src/styled"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) =>
      env === "production"
        ? require("./webpack.prod")
        : require("./webpack.dev"),
  },
};

const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig, webpack) => {
      webpackConfig.output.publicPath =
        process.env.NODE_ENV === "production" ? "/reactsysapp/" : "/";
      return webpackConfig;
    },
  },
};

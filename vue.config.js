const os = require("os");
const fs = require("fs");

module.exports = {
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    https:
      process.env.NODE_ENV === "development"
        ? {
            key: fs.readFileSync(os.homedir() + "/.localhost_ssl/server.key"),
            cert: fs.readFileSync(os.homedir() + "/.localhost_ssl/server.crt")
          }
        : false
  },
  chainWebpack: webpackConfig => {
    webpackConfig.module
      .rule("text")
      .test(/\.txt(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 1,
        // use explicit fallback to avoid regression in url-loader>=1.1.0
        fallback: {
          loader: "file-loader",
          options: {
            name: "text/[name].[hash:8].[ext]"
          }
        }
      });
  }
};

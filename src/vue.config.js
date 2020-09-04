module.exports = {
  devServer: {
    port: 8080,
    host: "localhost",
    https: false,
    open: true,
    proxy: {
      "/apis": {
        target: "https://seashop.shop/apis",
        changeOrigin: true,
        pathRewrite: {
          "/apis": ""
        }
      }
    }
  }
}
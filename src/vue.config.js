module.exports = {
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    https: true,
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

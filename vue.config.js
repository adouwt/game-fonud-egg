module.exports = {
  baseUrl: process.env.VUE_APP_PUBLIC_URL,
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 3000,
    proxy: 'http://localhost:9000'
  }
}

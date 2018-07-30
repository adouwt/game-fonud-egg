const axios = require('./axios')
const qs = require('qs')
const CryptoJS = require('crypto-js')
const formatTime = require('./formattime.js')
module.exports = {
  thumbService: async (ctx, next) => {
    let sessionToken = ctx.cookies.get('sessionToken') ? ctx.cookies.get('sessionToken') : ''
    let deviceID = ctx.cookies.get('deviceID') ? ctx.cookies.get('deviceID') : ''
    const reqTimestamp = Date.parse(new Date())
    const arg0 = ctx.request.body.method
    const reqData = {
      reqHeadParam: {
        sessionToken: sessionToken,
        // sessionToken: 'TVpuY0N4NmcvZXBDV0F3Ny9SUnVIbWw0Mm9DTmtJbjhGZXJIS0tETkpWcz0clear',
        deviceID: deviceID,
        platform: 'App'
      },
      reqTimestamp: reqTimestamp,
      sn: formatTime(),
      reqParam: ctx.request.body.dataJson,
      reqUrl: 'http',
      platform: 'THUMBAPP'
    }
    console.log(reqData)
    const arg1 = JSON.stringify(reqData)
    const arg2 = CryptoJS.MD5(`${arg0}|${arg1}|${process.env.VUE_APP_API_KEY}`).toString(CryptoJS.enc.Hex).toUpperCase()
    await axios.post(`${process.env.VUE_APP_API_URL}`, qs.stringify({arg0: arg0, arg1: arg1, arg2: arg2}))
      .then(res => {
        ctx.body = res.data
      })
      .catch(error => {
        ctx.log.error(`${error.status},${error.statusText}`)
      })
  }
}

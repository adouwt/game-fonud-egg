const router = require('koa-router')()
const ajaxRequest = require('./httpRouter')
module.exports = (app) => {
  router.post('/thumbService', ajaxRequest.thumbService)
  app.use(router.routes()).use(router.allowedMethods())
}

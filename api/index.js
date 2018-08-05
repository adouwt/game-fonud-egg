const router = require('koa-router')()
const ajaxRequest = require('./httpRouter')
module.exports = (app) => {
  router.get('/login', ajaxRequest.login)
  router.get('/register', ajaxRequest.register)
  app.use(router.routes()).use(router.allowedMethods())
}

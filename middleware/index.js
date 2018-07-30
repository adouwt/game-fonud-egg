const path = require('path')
const ip = require('ip')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const staticFiles = require('koa-static')
const logger = require('./logger/index')
module.exports = (app) => {
  app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
  }))
  app.use(json())
  // 应用全局变量
  app.use(async (ctx, next) => {
    ctx.set('X-Powered-By', 'https://www.laocaibao.com')
    ctx.state = Object.assign(ctx.state, {
      version: 'v1.0.0'
    })
    await next()
  })

  // 静态资源文件目录
  app.use(staticFiles(path.resolve(__dirname, '../dist')))

  // logger
  app.use(logger({
    env: app.env, // koa 提供的环境变量
    projectName: 'thumbweb',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }))

  // 增加错误的监听处理
  app.on('error', (err, ctx) => {
    if (ctx && !ctx.headerSent && ctx.status < 500) {
      ctx.status = 500
    }
    if (ctx && ctx.log && ctx.log.error) {
      if (!ctx.state.logged) {
        ctx.log.error(err.stack)
      }
    }
  })
}

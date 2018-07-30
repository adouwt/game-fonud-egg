const log4js = require('log4js')
const access = require('./access.js')
const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark']
const baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: 'dev',
  projectName: 'koa2-log4js',
  serverIp: '0.0.0.0'
}
module.exports = (options) => {
  const contextLogger = {}
  const appenders = {}
  const opts = Object.assign({}, baseInfo, options || {})
  const { env, appLogLevel, dir, serverIp, projectName } = opts
  const commonInfo = { projectName, serverIp }
  // 日志打印格式配置 https://log4js-node.github.io/log4js-node/layouts.html
  appenders.cheese = {
    type: 'dateFile',
    filename: `${dir}/thumbweb`,
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true,
    layout: {
      type: 'pattern',
      pattern: '[%d{yyyy/MM/dd-hh:mm:ss.SSS}] [%p] %c - %m'
    }
  }
  if (env === 'dev' || env === 'local' || env === 'development') {
    appenders.out = {
      type: 'console'
    }
  }
  let config = {
    appenders,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    }
  }
  const logger = log4js.getLogger('cheese')
  return async (ctx, next) => {
    const start = Date.now()
    log4js.configure(config)
    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
        logger[method](access(ctx, message, commonInfo))
      }
    })
    ctx.log = contextLogger
    await next()
    const responseTime = Date.now() - start
    logger.info(access(ctx, {
      status: ctx.status,
      responseTime: `响应时间为${responseTime / 1000}s`
    }, commonInfo))
  }
}

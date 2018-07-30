require('dotenv').config({path: `./.env.${process.env.CUSTOM_ENV}`})
const Koa = require('koa')
const app = new Koa()
const middleware = require('./middleware/index')
const port = process.env.PORT || 9000
const httpRouter = require('./api/index')

// middlewares
middleware(app)

// routes
httpRouter(app)

app.listen(port)
console.log(`Vue Nodejs Server listening on localhost : ${port}, at ${new Date().toLocaleString()}`)

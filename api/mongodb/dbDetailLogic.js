const Koa = require('koa');
const app = new Koa();
const config = require("./dbConfig.js");
const db = require("./dbFunctions.js");
app.use(async ctx => {
    ctx.body = 'Hello koa';
});
  
app.listen(config.port, () => {
	console.log(`项目启动成功: ${JSON.stringify(process.env.CUSTOM_ENV)} -- ${config.port}`);
});

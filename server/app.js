const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const graphql = require('graphql-server-koa');
const fs = require('fs');
const path = require('path');
const schema = require('./schema')
const _ = require('lodash');
const mongodb = require('./mongodb')
let { graphqlKoa, graphiqlKoa } = graphql;
let app = new Koa();
let config = require('./config');

//将配置新放入ctx中
app.context.config = config;

app.use(bodyParser());

const router = new Router();

router.get('/graphiql', async (ctx, next) => {
  await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next)
})
router.all('/graphql', async (ctx, next) => {

  //添加hook

  //前置hook
  console.log();

  await graphqlKoa({ schema: schema })(ctx, next);

  //后缀hook
  let { operationName } = ctx.request.body;

})


//挂载客户端访问静态路由
app.use(static(path.join(__dirname, '../vue/dist')));
app.use(router.routes());
mongodb();
app.listen(config.port);
console.log("server is ready on port: ", config.port);

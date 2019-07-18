let graphqlCompose = require('graphql-compose');
let { schemaComposer } = graphqlCompose;
global.schemaComposer = schemaComposer;

require('./User');

//构建自动语句
const graphqlSchema = global.schemaComposer.buildSchema();
module.exports = graphqlSchema;
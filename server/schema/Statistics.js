const composeMongoose = require('graphql-compose-mongoose/node8')
let { composeWithMongoose } = composeMongoose;
const mongoose = require('mongoose');

const StatisticsSchema = new mongoose.Schema({
  statisticsId: {
    type: String,
    index: true
  },
  readCount: Number,
  subscribeCount: Number
})



const Statistics = mongoose.model('Statistics', StatisticsSchema);

const StatisticsTC = composeWithMongoose(Statistics, customizationOptions);

//扩展exponent指数字段
StatisticsTC.extendField('exponent', {
  resolve: (source, args, context) => {
    console.log("StatisticsTC.extendField source===>", source);
    console.log("StatisticsTC.extendField args===>", args);
    console.log("StatisticsTC.extendField context===>", context);
    return "1111"
  }
});


//query的方法:
schemaComposer.Query.addFields({
  StatisticsById: StatisticsTC.getResolver('findById'),
  StatisticsByIds: StatisticsTC.getResolver('findByIds'),
  StatisticsOne: StatisticsTC.getResolver('findOne'),
  StatisticsMany: StatisticsTC.getResolver('findMany'),
  StatisticsCount: StatisticsTC.getResolver('count'),
  StatisticsConnection: StatisticsTC.getResolver('connection'),
  StatisticsPagination: StatisticsTC.getResolver('pagination')
});


//mutation的方法:
schemaComposer.Mutation.addFields({
  StatisticsCreateOne: StatisticsTC.getResolver('createOne'),
  StatisticsCreateMany: StatisticsTC.getResolver('createMany'),
  StatisticsUpdateById: StatisticsTC.getResolver('updateById'),
  StatisticsUpdateOne: StatisticsTC.getResolver('updateOne'),
  StatisticsUpdateMany: StatisticsTC.getResolver('updateMany'),
  StatisticsRemoveById: StatisticsTC.getResolver('removeById'),
  StatisticsRemoveOne: StatisticsTC.getResolver('removeOne'),
  StatisticsRemoveMany: StatisticsTC.getResolver('removeMany')
});

module.exports = {
  Statistics, StatisticsTC
}
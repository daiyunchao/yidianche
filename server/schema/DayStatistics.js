const composeMongoose = require('graphql-compose-mongoose/node8')
let { composeWithMongoose } = composeMongoose;
const mongoose = require('mongoose');


const DayStatisticsSchema = new mongoose.Schema({
  statisticsId: {
    type: String,
    index: true
  },
  Date: Number,//日期的最小时间戳
  readCount: Number,
  subscribeCount: Number
})


const DayStatistics = mongoose.model('DayStatistics', DayStatisticsSchema);

const DayStatisticsTC = composeWithMongoose(DayStatistics, customizationOptions);
//query的方法:
schemaComposer.Query.addFields({
  DayStatisticsById: DayStatisticsTC.getResolver('findById'),
  DayStatisticsByIds: DayStatisticsTC.getResolver('findByIds'),
  DayStatisticsOne: DayStatisticsTC.getResolver('findOne'),
  DayStatisticsMany: DayStatisticsTC.getResolver('findMany'),
  DayStatisticsCount: DayStatisticsTC.getResolver('count'),
  DayStatisticsConnection: DayStatisticsTC.getResolver('connection'),
  DayStatisticsPagination: DayStatisticsTC.getResolver('pagination')
});


//mutation的方法:
schemaComposer.Mutation.addFields({
  DayStatisticsCreateOne: DayStatisticsTC.getResolver('createOne'),
  DayStatisticsCreateMany: DayStatisticsTC.getResolver('createMany'),
  DayStatisticsUpdateById: DayStatisticsTC.getResolver('updateById'),
  DayStatisticsUpdateOne: DayStatisticsTC.getResolver('updateOne'),
  DayStatisticsUpdateMany: DayStatisticsTC.getResolver('updateMany'),
  DayStatisticsRemoveById: DayStatisticsTC.getResolver('removeById'),
  DayStatisticsRemoveOne: DayStatisticsTC.getResolver('removeOne'),
  DayStatisticsRemoveMany: DayStatisticsTC.getResolver('removeMany')
});

module.exports = {
  DayStatistics, DayStatisticsTC
}
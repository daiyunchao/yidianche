const composeMongoose = require('graphql-compose-mongoose/node8')
let { composeWithMongoose } = composeMongoose;
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    index: true
  },
  accountName: String,
  accountDesc: String,//账号简介
  accountType: String,
  accountLogo: String,
  accountInfo: String,//账号描述
  contentLink: String,//已有内容渠道及链接
  accountStatus: {
    type: String,
    enum: ['AuditInProgress', 'AuditAndApproval']
  },//审核状态
  userName: String,
  userIDCardNumber: String,
  userLiveProviceName: String,
  userLiveCity: String,
  userPhone: String,
  userEmail: String,
  userContact: String,
  recommendUserName: String,
  mediaType: {
    type: String,
    enum: ['media', 'media-self', 'org', 'company']
  },
  password: String,//使用md5签名存储

});

//用户对象
const User = mongoose.model('User', UserSchema);

const customizationOptions = {

};

const UserTC = composeWithMongoose(User, customizationOptions);
UserTC.extendField('password', {
  resolve: (source, args, context) => null
});
let schemaComposer = global.schemaComposer;



//query的方法:
schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userCount: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),
  userPagination: UserTC.getResolver('pagination')
});


//mutation的方法:
schemaComposer.Mutation.addFields({
  userCreateOne: UserTC.getResolver('createOne'),
  userCreateMany: UserTC.getResolver('createMany'),
  userUpdateById: UserTC.getResolver('updateById'),
  userUpdateOne: UserTC.getResolver('updateOne'),
  userUpdateMany: UserTC.getResolver('updateMany'),
  userRemoveById: UserTC.getResolver('removeById'),
  userRemoveOne: UserTC.getResolver('removeOne'),
  userRemoveMany: UserTC.getResolver('removeMany')
});


module.exports = {
  User, UserTC
}
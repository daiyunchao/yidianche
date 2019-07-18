const mongoose = require('mongoose');
let config = require('../config')
module.exports = () => {
  mongoose.set('debug', true);
  mongoose.connect(config.dbPath);
  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath);
  })
  mongoose.connection.on('error', (err) => {
    console.error("connect mongodb has some error ==>", err);
  })
  mongoose.connection.on('open', () => {
    console.log(`connected to the mongodb config path is ==>${config.dbPath}`);
  })
}
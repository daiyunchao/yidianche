let developmentConfig = {
  dbPath: 'mongodb://192.168.1.68:27017/yidianche'
}
module.exports = {
  ...require('./common'),
  ...developmentConfig
}
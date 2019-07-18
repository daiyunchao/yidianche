let development = require('./development.js')
let production = require('./production.js')
const arg = require('arg');
let args={};
args= arg({
  '-e': String
});
let env = args['-e'];
console.log("env==>",development);

if (env == 'development') {
  module.exports = development;
} else {
  module.exports = production;
}


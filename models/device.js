var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../config/configuration');
var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.user + 
  ":" + config.password + 
  "@" + config.host + 
  ':' + config.port + 
  '/' + config.collection);

var DeviceSchema = new Schema({  
  email: {
      type: String,
      required: true
  }
});

module.exports = conn.model('Device', DeviceSchema);

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../config/configuration');

var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.user + 
  ":" + config.password + 
  "@" + config.host + 
  ':' + config.port + 
  '/' + config.collection);

//Create position schema
var PositionSchema = new Schema({
  device: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = conn.model('position', PositionSchema);
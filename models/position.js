var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../config/configuration');

var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.host + ':' + config.port + '/' + config.database);

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
    type: String,
    required: true,
    default: null
  }
});

module.exports = conn.model('position', PositionSchema);
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../config');

var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.db_url);

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
    default: Date.now
  }
});

module.exports = conn.model('position', PositionSchema);
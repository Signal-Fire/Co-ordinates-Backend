var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../config/configuration');
var Schema = mongoose.Schema;

var connection = mongoose.createConnection(config.host + ':' + config.port);

var DeviceSchema = new Schema({
  device: {
      type: Number,
      required: true
  },
  email: {
      type: String,
      required: true
  }
});

module.exports = connection.model('device', DeviceSchema);

/*jshint esversion: 6*/
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var crypto = require('crypto');

var config = require('../config/configuration');
var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.db_url);

var DeviceSchema = new Schema({  
  email: {
      type: String,
      required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = conn.model('Device', DeviceSchema);

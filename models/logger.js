/*jshint esversion: 6*/
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../config/configuration');

var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.host + ':' + config.port + '/' + config.database);

var LoggerSchema = new Schema({
    message: {
        type: String,
        require: true
    },
    time: {
        type: String,
        default: null
    }
});

module.exports = conn.model('Logger', LoggerSchema);
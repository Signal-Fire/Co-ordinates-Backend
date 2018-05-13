var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../Config');

var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.db_url);

var LoggerSchema = new Schema({
    message: {
        type: String,
        require: true
    },
    time: {
        type: String,
        default: Date.now
    }
});

module.exports = conn.model('Logger', LoggerSchema);
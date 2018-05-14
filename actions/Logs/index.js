var Log = require('../../models/logger');

module.exports = new class Logger {
    constructor() {

    }

    Create(message) {
        var log = new Log({
            message : message
        });

        log.save(function(err, result) {
            if (err)
                reject(err);
        });
    }
}
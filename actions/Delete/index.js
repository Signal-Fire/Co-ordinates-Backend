var Device = require('../../models/device'),
    Logger = require('../Logs');

module.exports = new class Delete {
    constructor() {

    }

    Device(id) {
        return new Promise(function(resolve, reject) {
            Device.findByIdAndRemove(id, function(err, result) {
                if (err || result === null)
                    return reject(err);

                Logger.Create("Deleted: " + result.email);

                return resolve(result);
            })
        });
    }

    All() {
        return new Promise(function(resolve, reject) {
            Device.remove({}, function(err, result) {
                if (err || result === null)
                    return reject(err);

                Logger.Create("All devices deleted");
                
                return resolve(result);
            })
        })
    }
}
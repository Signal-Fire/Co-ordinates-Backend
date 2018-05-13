var Device = require('../../../models/device');

module.exports = new class DeviceFinder {
    constructor() {

    }

    All() {
        return new Promise(function(resolve, reject) {
            Device.find({}, function(err, result) {
                if (err || result === null)
                    return reject(err);

                return resolve(result);
            });
        });
    }

    ById(deviceId) {
        return new Promise(function(resolve, reject) {
            Device.findById(deviceId, function(err, result) {
                if (err || result === null)
                    return reject(err);

                return resolve(result);
            });
        });
    }
}
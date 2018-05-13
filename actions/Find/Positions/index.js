var config = require('../../../Config'),
    Position = require('../../../models/position'),
    Device = require('../../../models/device');

module.exports = new class PositionFinder {
    constructor() {

    }

    PositionsByDeviceId(deviceId) {
        return new Promise(function(resolve, reject) {
            let query = {
                "device" : deviceId
            }

            Position.find(query).exec(function(err, result) {
                if (err)
                    return reject(err);
                
                return resolve(result);
            });
        })
    }

    All() {
        return new Promise(function(resolve, reject) {
            Position.find({}, function(err, result) {
                if (err || result === null)
                    return reject(err);

                return resolve(result);
            });
        })
    }
}
var config = require('../../../config'),
    Position = require('../../../models/position');

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

    ById(positionId) {
        return new Promise(function(resolve, reject) {
            Position.findById(positionId, function(err, result) {
                if (err || result === null)
                    return reject(err);

                return resolve(result);
            })
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

    CountForDevice(deviceId) {
        return new Promise(function(resolve, reject) {
            var query = {
                "device" : deviceId
            }

            Position.count(query, function(err, result) {
                if (err || result === null)
                    return reject(err);

                return resolve(result.length);
            })
        })
    }
}
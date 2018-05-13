var Device = require('../../models/device'),
    Log = require('../../models/logger');

module.exports = new class Create {
    constructor() {

    }

    Device(device) {
        return new Promise(function(resolve, reject) {
            var newDevice = new Device(device);
            newDevice.save(function(err, result) {
                if (err || result === null)
                    return reject(err);

                var log = new Log({
                    message: "User created: " + result.email + ""
                });

                log.save(function(err, result) {
                    if (err)
                        reject(err);
                });

                return resolve(result);
            })
        })
    }
}
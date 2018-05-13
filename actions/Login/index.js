var Logger = require('../Logs'),
    jwt = require('jwt-simple'),
    User = require('../../models/user');

module.exports = new class Login {
    constructor() {

    }

    LoginAdminUser(user) {
        return new Promise(function(resolve, reject) {
            User.findOne({ email : user.email }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to find user");
                
                result.comparePassword(user.password, function(err, isMatch) {
                    if (!isMatch || err)
                        return reject(err);

                    Logger.Create("Admin user: " + user.email + " logged in");

                    var token = jwt.encode(user.email, config.passport_secret);

                    return resolve(token);
                });
            })
        })
    }
}
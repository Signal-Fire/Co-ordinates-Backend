var config = require('../config');
var moment = require('moment');

var User = require('../models/user');

var self = module.exports = {
    Signup: function(user) {
        return new Promise(function(resolve, reject) {
            var newUser = new User({
                email: user.email,
                password: user.password
            });

            newUser.save(newUser, function(err, result) {
                if (err) {
                    reject(err);
                    return err;
                }
                
                resolve(result);
            });
        });
    }
};
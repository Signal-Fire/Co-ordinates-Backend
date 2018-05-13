var moment = require('moment');
var jwt = require('jwt-simple');

var config = require('../Config');
var Device = require('../models/device');
var Log = require('../models/logger');
var User = require('../models/user');

var self = module.exports = {
    
    AdminLogin: function(info) {
        return new Promise(function(resolve, reject) {    
            User.findOne({email: info.email}, function(err, result) {      
                if (err || !result) {
                    reject(err);
                    return err;
                }
                
                result.comparePassword(info.password, function(err, isMatch) {
                    if (!isMatch || err) {
                        reject(err);
                    }

                    var log = new Log({
                        message: "Admin user: " + info.email + " logged in"
                    });

                    log.save(function(err, result) {
                        if (err)
                            reject(err);

                        console.log(result.message);
                    });

                    var token = jwt.encode(info.email, config.passport_secret);

                    var response = {
                        'token': 'JWT ' + token
                    };

                    resolve(response);
                });          
            });
        });
    },

    Perform: function(info) {
        return new Promise(function(resolve, reject) {            
            Device.findOne({email: info.email}, function(err, result) {
                if (err || result === null) {
                    reject(err);
                    return err;
                }
                
                var log = new Log({
                    message: (info.email === config.AdminUser ? "User " : "Admin User ") + info.email + " logged in"
                });

                log.save(function(err, result) {
                    if (err)
                        reject(err);
                    console.log("[LOGS] Saved log for " + info.email);
                });

                resolve(result);
            });
        });
    }
};
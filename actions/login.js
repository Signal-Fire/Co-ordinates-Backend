/*jshint esversion: 6*/
var moment = require('moment');

var Device = require('../models/device');
var Log = require('../models/logger');
var User = require('../models/user');

var self = module.exports = {
    
    AdminLogin: function(info) {
        return new Promise(function(resolve, reject) {
            var query = {
                email: info.email
            };
            User.findOne(query, function(err, result) {
                if (err || !result) {
                    reject(err);
                    return err;
                }
                
                result.comparePassword(info.password, function(err, isMatch) {
                    if (!isMatch || err) {
                        reject(err);
                    }

                    var log = new Log({
                        message: "Admin user: " + info.email + " logged in",
                        time: moment().format("MM-DD-YYYY HH:mm:ss")
                    });
                    log.save(function(err, result) {
                        if (err)
                            reject(err);

                        console.log("ADMIN USER LOGGED IN");
                    });

                    resolve(result);
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
                    message: "User " + info.email + " logged in",
                    time: moment().format("MM-DD-YYYY HH:mm:ss")
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
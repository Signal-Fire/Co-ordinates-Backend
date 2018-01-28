/*jshint esversion: 6*/
var moment = require('moment');

var Device = require('../models/device');
var Log = require('../models/logger');
var User = require('../models/user');

var self = module.exports = {
     Perform: function(info) {
        return new Promise(function(resolve, reject) {            
            Device.findOne({email: info.email}, function(err, result) {
                if (err || result === null) {
                    reject(err);
                    return err;
                }
                
                var log = new Log({
                    message: (info.email === config.AdminUser ? "User " : "Admin User ") + info.email + " logged in",
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
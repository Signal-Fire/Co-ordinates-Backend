/*jshint esversion: 6*/
var moment = require('moment');

var Device = require('../models/device');
var Log = require('../models/logger');

var self = module.exports = {
    Perform: function(info) {
        return new Promise(function(resolve, reject) {
            var query = {
                email: info.email
            };
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
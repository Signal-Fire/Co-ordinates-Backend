/*jshint esversion: 6*/
var config = require('../config/configuration');
var moment = require('moment');

var User = require('../models/user');

var self = module.exports = {
    Signup: function(user) {
        return new Promise(function(resolve, reject) {
            var newUser = new User({
                email: user.email,
                password: user.password,
                created_date: moment().format("DD-MM-YYYY HH:mm:ss")
            });

            newUser.save(newUser, function(err, result) {
                console.log(err);
                if (err) {
                    reject(err);
                    return err;
                }
                
                resolve(result);
            });
        });
    }
};
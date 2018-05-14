var config = require('../Config');
var Position = require('../models/position');
var Device = require('../models/device');

var self = module.exports = {

    InsertPosition: function (obj) {   
        return new Promise(function (resolve, reject) {
            if (obj.length === undefined) {
                var newPos = new Position(obj);
                newPos.save(function(err, result) {
                    if (err)
                        reject(err);

                    resolve(result);
                });
            }

            for (var i = 0; i < obj.length; i++) {
                var newPos = new Position(obj[i]);            
                newPos.save(function(err, result) {                
                    if (err)
                        reject(err);
                    
                    resolve(result);
                });
            }                   
        });
    },

    InsertDevice: function(obj) {
        return new Promise(function(resolve, reject) {
            var newDevice = new Device(obj); 
            newDevice.save(function(err, result) {
                if (err)
                    reject(err);
                    
                resolve(result);
            });
        });
    },

};
/*jshint esversion:6*/
var config = require('../config/configuration');

var Position = require('../models/position');
var Device = require('../models/device');

var self = module.exports = {
    DisplayAll: function () {
        return new Promise(function (resolve, reject) {
            Position.find({}).exec(function(err, result) {
                if (err)
                    reject(err);

                resolve(result);
            });            
        });
    },

    InsertPosition: function (obj) {        
        return new Promise(function (resolve, reject) {
            var newPos = new Position(obj);            
            newPos.save(function(err, result) {                
                if (err)
                    reject(err);
                
                resolve(result);
            });            
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

    FindByDeviceId: function (deviceId) {
        var query = {
            "device": deviceId
        };

        return new Promise(function (resolve, reject) {
            Position.find({"device": deviceId}).exec(function(err, result) {
                if (err)
                    reject(err);
                
                resolve(result);
            });            
        });
    },

    DropAll: function () {
        return new Promise(function (resolve, reject) {
            Position.remove({}, function(err, result) {
                if (err)
                    reject(err);
                
                resolve(result);
            });
        });
    },

    DropByDeviceId: function (deviceId) {
        return new Promise(function (resolve, reject) {
            Position.remove({"device": deviceId}).exec(function(err, result) {
                if (err)
                    reject(err);
                
                resolve(result);
            });
        });
    }
};
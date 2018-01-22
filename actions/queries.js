/*jshint esversion:6*/
var config = require('../config/configuration');

var url = config.host + ':' + config.port;
var mongoClient = require('mongodb').MongoClient;

var self = module.exports = {
    Connect: function () {
        return new Promise(function (resolve, reject) {
            mongoClient.connect(url, (err, database) => {
                if (err)
                    reject(err);

                resolve(database.db(config.database));
            });
        });
    },

    DisplayAll: function () {
        return new Promise(function (resolve, reject) {
            self.Connect().then(function (db) {
                db.collection(config.positions).find({}).toArray(function (err, result) {
                    if (err)
                        reject(err);

                    resolve(result);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    Insert: function (obj) {
        return new Promise(function (resolve, reject) {
            self.Connect().then(function (db) {
                db.collection(config.positions).insertOne(obj, function (err, result) {
                    if (err)
                        reject(err);

                    resolve(result);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    FindByDeviceId: function (deviceId) {
        var query = {
            "device": deviceId
        };

        return new Promise(function (resolve, reject) {
            self.Connect().then(function (db) {
                db.collection(config.positions).find(query).toArray(function (err, result) {
                    if (err)
                        reject(err);

                    resolve(result);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    DropAll: function () {
        return new Promise(function (resolve, reject) {
            self.Connect().then(function (db) {
                db.collection(config.positions).remove({}, function (err, result) {
                    if (err)
                        reject(err);

                    resolve(result);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    DropByDeviceId: function (deviceId) {
        return new Promise(function (resolve, reject) {
            self.Connect().then(function (db) {
                db.collection(config.positions).remove({
                    "device": deviceId
                }, function (err, result) {
                    if (err)
                        reject(err);

                    resolve(result);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};
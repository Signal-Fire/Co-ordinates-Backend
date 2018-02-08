var app = require('express').Router();

var queries = require('../actions/queries');
var status = require('../actions/status');

app.get('/all', function (req, res) {
    queries.DisplayAll().then(function (result) {
        status.Accepted(res, result);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});

app.get('/position/:id', function(req, res) {
    queries.FindPositionByDeviceId(req.params.id)
        .then(function(result) {
            status.Accepted(res, result);
        }).catch(function(err) {
            console.log(err);
            status.BadRequest(res);
        });
});

app.get('/device/all', function(req, res) {
    queries.DisplayDevices().then(function(result) {
        status.Accepted(res, result);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});

app.get('/device/:id', function (req, res) {
    queries.FindByDeviceId(req.params.id).then(function (result) {
        status.Accepted(res, result);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});

module.exports = app;
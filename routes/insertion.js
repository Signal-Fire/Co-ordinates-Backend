var app = require('express').Router();

var queries = require('../actions/queries');
var status = require('../actions/status');

app.post('/device', function(req, res) {
    queries.InsertDevice(req.body).then(function(result) {
        status.Accepted(res, result);
    }).catch(function(err) {        
        status.BadRequest(res);
    });
});

app.post('/position', function (req, res) {
    queries.InsertPosition(req.body).then(function (result) {
        status.Accepted(res, result);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});

module.exports = app;
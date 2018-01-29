var app = require('express').Router();

var queries = require('../actions/queries');
var status = require('../actions/status');
    
app.post('/all', function (req, res) {
    queries.DropAll().then(function (result) {
        status.Accepted(res);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});

app.post('/:id', function (req, res) {
    queries.DropByDeviceId(req.params.id).then(function (result) {
        status.Accepted(res);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});

module.exports = app;
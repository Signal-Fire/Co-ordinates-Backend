var route = require('express').Router(),
    Find = require('../../actions/Find');

var queries = require('../../actions/queries');


route.get('/device/all', function(req, res) {
    queries.DisplayDevices().then(function(result) {
        return res.status(200).send(result);
    }).catch(function(err) {
        return res.status(400).send({ error : err });
    });
});

route.get('/device/:id', function (req, res) {
    queries.FindByDeviceId(req.params.id).then(function (result) {
        return res.status(200).send(result);
    }).catch(function(err) {
        return res.status(400).send({ error : err });
    });
});

module.exports = route;
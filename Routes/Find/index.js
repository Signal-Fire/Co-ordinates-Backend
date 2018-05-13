var route = require('express').Router(),
    Find = require('../../actions/Find');

var queries = require('../../actions/queries');

route.get('/position/:id', function(req, res) {
    queries.FindPositionByDeviceId(req.params.id)
        .then(function(result) {
            return res.status(200).send(result);
        }).catch(function(err) {
            return res.status(400).send({ error : err });
        });
});

route.get('/positions/count/:id', function(req, res) {
    queries.FindCountByDeviceId(req.params.id)
        .then(result => {
            return res.status(200).send({ count : result });
        }).catch(error => {
            return res.status(400).send({ error: error });
        })
});

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
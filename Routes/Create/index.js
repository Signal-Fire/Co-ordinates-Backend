var route = require('express').Router(),
    Creator = require('../../actions/Create');

route.post('/device', function(req, res) {
    Creator.Device(req.body).then(result => {
        return res.status(200).send(result);
    }).catch(error => {
        return res.status(400).send({ error : error });
    })
})

module.exports = route;
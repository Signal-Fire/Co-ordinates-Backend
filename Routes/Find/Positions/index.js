var route = require('express').Router(),
    Find = require('../../../actions/Find/Positions');

route.get('/device/:id', function(req, res) {
    Find.PositionsByDeviceId(req.params.id).then(result => {
        return res.status(200).send(result);
    }).catch(error => {
        return res.status(400).send({ error : error });
    })
});

route.get('/all', function(req, res) {
    Find.All().then(result => {
        return res.status(200).send(result);
    }).catch(error => {
        return res.status(400).send({ error : err });
    })
})

module.exports = route;
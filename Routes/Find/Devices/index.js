var route = require('express').Router(),
    Find = require('../../../actions/Find/Devices');

route.get('/all', function(req, res) {
    Find.All().then(result => {
        return res.status(200).send(result);
    }).catch(error => {
        return res.status(400).send({ error : error });
    })
});

route.get('/:id', function(req, res) {
    Find.ById(req.params.id).then(result => {
        return res.status(200).send(result);
    }).catch(error => {
        return res.status(400).send({ error : error });
    })
})
module.exports = route;
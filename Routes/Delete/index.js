var app = require('express').Router();

var queries = require('../../actions/queries');
    
app.post('/all', function (req, res) {
    queries.DropAll().then(function (result) {
        return res.status(200).send(result);
    }).catch(function(err) {
        return res.status(400).send({ error : err });
    });
});

app.post('/:id', function (req, res) {
    queries.DropByDeviceId(req.params.id).then(function (result) {
        return res.status(200).send(result);
    }).catch(function(err) {
        return res.status(400).send({ error : err });
    });
});

module.exports = app;
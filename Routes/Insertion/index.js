var app = require('express').Router();

var queries = require('../../actions/queries');

app.post('/device', function(req, res) {
    queries.InsertDevice(req.body).then(function(result) {
        return res.status(200).send(result);
    }).catch(function(err) {        
        return res.status(400).send({ error : err });
    });
});

app.post('/position', function (req, res) {    
    queries.InsertPosition(req.body).then(function (result) {
        return res.status(200).send(result);
    }).catch(function(err) {
        return res.status(400).send({ error : err });
    });
});

module.exports = app;
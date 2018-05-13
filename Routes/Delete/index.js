var app = require('express').Router(),
    Delete = require('../../actions/Delete');

app.post('/all', function (req, res) {
    Delete.All().then(result => {
        return res.status(200).send({ deleted : result });
    }).catch(error => {
        return res.status(400).send({ error : error });
    })
});

app.post('/:id', function (req, res) {
    Delete.Device(req.params.id).then(result => {
        return res.status(200).send({ deleted : result });
    }).catch(error => {
        return res.status(400).send({ error : error });
    });
});

module.exports = app;
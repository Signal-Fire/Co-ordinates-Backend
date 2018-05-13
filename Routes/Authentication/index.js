var app = require('express').Router();

var login = require('../../actions/login');
var registration = require('../../actions/registration');

app.post('/login', function(req, res) {
    login.Perform(req.body).then(function(result) {
        return res.status(200).send(result);
    }).catch(function(err) {
        return res.status(401).send({ error : err });
    });
});	

app.post('/signup', function(req, res) {
    registration.Signup(req.body).then(function(result) {
        return res.status(201).send(result);
    }).catch(function(err) {
        return res.status(401).send({ error : err });
    });
});

app.post('/adminlogin', function(req, res) {
    login.AdminLogin(req.body).then(function(result) {			
        return res.status(200).send(result);
    }).catch(function(err) {
        return res.status(401).send({ error : err });
    });
});

module.exports = app;
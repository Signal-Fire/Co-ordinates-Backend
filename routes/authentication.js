var app = require('express').Router();

var status = require('../actions/status');
var login = require('../actions/login');
var registration = require('../actions/registration');

app.post('/login', function(req, res) {
    login.Perform(req.body).then(function(result) {
        status.Accepted(res, result);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});	

app.post('/signup', function(req, res) {
    registration.Signup(req.body).then(function(result) {
        status.Accepted(res);
    }).catch(function(err) {
        status.BadRequest(res);
    });
});

app.post('/adminlogin', function(req, res) {
    console.log(req.body);
    login.AdminLogin(req.body).then(function(result) {			
        status.Accepted(res, result);
    }).catch(function(err) {
        status.Unauthorized(res);
    });
});

module.exports = app;
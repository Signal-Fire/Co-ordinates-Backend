var route = require('express').Router(),
    Portal = require('../../actions/Login');

route.post('/admin', function(req, res) {
    Portal.AdminLogin(req.body).then(token => {
        return res.status(200).send({ token : token });
    }).catch(error => {
        return res.status(401).send({ error : error });
    })
})
module.exports = route;
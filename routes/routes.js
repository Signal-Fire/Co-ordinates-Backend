/*jshint esversion: 6*/
var queries = require('../actions/queries');
var login = require('../actions/login');
var status = require('../actions/status');
var registration = require('../actions/registration');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.send('Howdy');
	});

	app.post('/login', function(req, res) {
		console.log(req);
		login.Perform(req.body).then(function(result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.Unauthorized(res);
		});
	});	

	app.get('/displayall', function (req, res) {
		queries.DisplayAll().then(function (result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.Unauthorized(res);
		});
	});

	app.get('/find/:id', function (req, res) {
		queries.FindByDeviceId(req.params.id).then(function (result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.Unauthorized(res);
		});
	});

	app.post('/insertdevice', function(req, res) {
		queries.InsertDevice(req.body).then(function(result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.BadRequest(res);
		});
	});

	app.post('/signup', function(req, res) {
		registration.Signup(req.body).then(function(result) {
			status.Accepted(res);
		}).catch(function(err) {
			console.log(err);
			status.BadRequest(res);
		});
	});

	app.post('/adminlogin', function(req, res) {
		console.log(req);
		login.AdminLogin(req.body).then(function(result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.Unauthorized(res);
		});
	});

	app.post('/insert', function (req, res) {		
		queries.InsertPosition(req.body).then(function (result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.Unauthorized(res);
		});
	});

	app.post('/deleteall', function (req, res) {
		queries.DropAll().then(function (result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.Unauthorized(res);
		});
	});

	app.post('/delete/:id', function (req, res) {
		queries.DropByDeviceId(req.params.id).then(function (result) {
			status.Accepted(res);
		}).catch(function(err) {
			status.Unauthorized(res);
		});
	});
};
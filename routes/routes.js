/*jshint esversion: 6*/
var queries = require('../actions/queries');
var login = require('../actions/login');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.send('Howdy');
	});

	app.post('/login', function(req, res) {
		login.Perform(req.body).then(function(result) {
			res.send(result);
		}).catch(function(err) {
			res.send(err);
		});
	});	

	app.get('/displayall', function (req, res) {
		queries.DisplayAll().then(function (result) {
			res.send(result);
		}).catch(function (err) {
			res.send(err);
		});
	});

	app.get('/find/:id', function (req, res) {
		queries.FindByDeviceId(req.params.id).then(function (result) {
			res.json(result);
		}).catch(function (err) {
			res.send(err);
		});
	});

	app.post('/insert', function (req, res) {		
		queries.Insert(req.body).then(function (result) {
			res.json(result);
		}).catch(function (err) {
			res.send(err);
		});
	});

	app.post('/deleteall', function (req, res) {
		queries.DropAll().then(function (result) {
			res.json(result);
		}).catch(function (err) {
			res.send(err);
		});
	});

	app.post('/delete/:id', function (req, res) {
		queries.DropByDeviceId(req.params.id).then(function (result) {
			res.json(result);
		}).catch(function (err) {
			res.send(err);
		});
	});
};
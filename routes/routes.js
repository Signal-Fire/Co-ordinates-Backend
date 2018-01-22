/*jshint esversion: 6*/
var queries = require('../actions/queries');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.send('Howdy');
	});

	app.get('/displayall', function (req, res) {
		queries.DisplayAll().then(function (result) {
			res.send(result);
		}).catch(function (result) {
			res.send(result);
		});
	});

	app.get('/find/:id', function (req, res) {
		queries.FindByDeviceId(req.params.id).then(function (result) {
			res.json(result);
		}).catch(function (result) {
			res.send(result);
		});
	});

	app.post('/insert', function (req, res) {
		queries.Insert(req.body).then(function (result) {
			res.json(result);
		}).catch(function (result) {
			res.send(result);
		});
	});

	app.post('/deleteall', function (req, res) {
		queries.DropAll().then(function (result) {
			res.json(result);
		}).catch(function (result) {
			res.send(result);
		});
	});

	app.post('/delete/:id', function (req, res) {
		queries.DropByDeviceId(req.params.id).then(function (result) {
			res.json(result);
		}).catch(function (result) {
			res.send(result);
		});
	});
};
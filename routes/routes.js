//Connect to mongoose (MongoDB)
var url = 'mongodb://127.0.0.1:27017';
var mongoClient = require('mongodb').MongoClient;

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Please use /api!');
	});

	app.get('/displayall', function(req, res) {
		mongoClient.connect(url, (err, database) => {
			const aFantasticDB = database.db('co-ords');
			aFantasticDB.collection('positions').find({}).toArray(function(err, result) {
				if (err) throw err;
				database.close();
				res.send(result);
			});
		});
	});

	app.get('/find/:id', function(req, res) {
		mongoClient.connect(url, (err, database) => {
			const theBestDB = database.db('co-ords');
			var query = {
				"device": req.params.id
			};
			theBestDB.collection('positions').find(query).toArray(function(err, result) {
				if (err) throw err;
				database.close();
				res.send(result);
			});
		});
	});

	app.post('/insert', function(req, res) {
		mongoClient.connect(url, (err, database) => {
			const insertionDB = database.db('co-ords');
			var obj = req.body;
			insertionDB.collection('positions').insertOne(obj, function(err, result) {
				if (err) throw err;
				database.close();
				res.json(obj);
			});
		});
	});
}
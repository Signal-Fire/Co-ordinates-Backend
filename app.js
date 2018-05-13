var express = require('express'),
	cors = require('cors'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	config = require('./config'),
	checkLastLogCron = require('./actions/cron-ops');

var app = express();

	var AuthRoute = require('./Routes/Authentication'),
		InsertRoute = require('./Routes/Insertion'),
		FindRoute = require('./Routes/Find'),
		DeleteRoute = require('./Routes/Delete');

app.use(cors());
app.use(compression());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/api/find', FindRoute);
app.use('/api/insert', InsertRoute);
app.use('/api/delete', DeleteRoute);
app.use('/api/auth', AuthRoute);

var cron = new checkLastLogCron();

app.listen(port);

console.log('Run Forrest Run! ' + port + ' miles!');
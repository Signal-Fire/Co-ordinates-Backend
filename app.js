var express = require('express'),
	cors = require('cors'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	config = require('./config'),
	checkLastLogCron = require('./actions/cron-ops');

var app = express();

var AuthRoute = require('./Routes/Authentication'),
	InsertRoute = require('./Routes/Insertion'),
	FindDeviceRoute = require('./Routes/Find/Devices'),
	FindPositionsRoute = require('./Routes/Find/Positions'),
	DeleteRoute = require('./Routes/Delete');

app.use(cors());
app.use(compression());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/api/find/devices', FindDeviceRoute);
app.use('/api/find/positions', FindPositionsRoute);
app.use('/api/insert', InsertRoute);
app.use('/api/delete', DeleteRoute);
app.use('/api/auth', AuthRoute);

var cron = new checkLastLogCron();

app.listen(config.port);

console.log('Run Forrest Run! ' + config.port + ' miles!');
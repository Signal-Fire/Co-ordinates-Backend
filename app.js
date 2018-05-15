var express = require('express'),
	cors = require('cors'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	config = require('./config'),
	checkLastLogCron = require('./actions/Cron');

var app = express();

var LoginRoute = require('./Routes/Login'),
	CreationRoute = require('./Routes/Create'),
	FindDeviceRoute = require('./Routes/Find/Devices'),
	FindPositionsRoute = require('./Routes/Find/Positions'),
	DeleteRoute = require('./Routes/Delete');

app.use(cors());
app.use(compression());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/api/create/', CreationRoute);
app.use('/api/find/devices', FindDeviceRoute);
app.use('/api/find/positions', FindPositionsRoute);
app.use('/api/login', LoginRoute);
app.use('/api/delete', DeleteRoute);

app.listen(config.port);

console.log('Run Forrest Run! ' + config.port + ' miles!');
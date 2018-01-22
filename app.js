var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var position = require('./models/position');

require('./routes/routes')(app);

app.use(bodyParser.json());

app.listen(port);

console.log('Run Forrest Run! 3,000 miles!');
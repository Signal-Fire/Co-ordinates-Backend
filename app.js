var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var position = require('./models/position');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

require('./routes/routes')(app);

app.listen(port);

console.log('Run Forrest Run! 3,000 miles!');
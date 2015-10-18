//OUR REQUIRES
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var path           = require('path');
var cors           = require('cors');
var port           = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/hate-angular');

//logging middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(morgan('dev'));

var routes = require('./config/routes');

server.listen(port, function() {
	console.log('server started');
});
//OUR REQUIRES
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var port           = process.env.PORT || 3000;

//logging middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(morgan('dev'));


server.listen(port, function() {
	console.log('server started');
});
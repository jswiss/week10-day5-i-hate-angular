var mongoose = require('mongoose');

var HateSchema = mongoose.Schema({
	title: String,
	image: String,
	video: String,
	likes: Number
});

module.exports = mongoose.model('Hate', HateSchema);
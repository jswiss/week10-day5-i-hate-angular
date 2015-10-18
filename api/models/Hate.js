var mongoose = require('mongoose');

var HateSchema = mongoose.schema({
	title: String,
	image: String,
	video: String,
	likes: Number
});

module.exports = mongoose.model('Hate', HateSchema);
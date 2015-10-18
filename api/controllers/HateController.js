var Hate = require('../models/Hate');

// GET
function getAll(request, response) {
  Hate.find(function(error, hates) {
    if(error) response.status(404).send(error);

    response.status(200).send(hates);
  }).select('-__v');
}

// POST
function createHate(request, response) {
  var hate = new Hate(request.body);

  hate.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(hate);
  });
}

// GET
function getHate(request, response) {
  var id = request.params.id;

  Hate.findById({_id: id}, function(error, hate) {
    if(error) response.status(404).send(error);

    response.status(200).send(hate);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createHate: createHate,
  getHate: getHate
}
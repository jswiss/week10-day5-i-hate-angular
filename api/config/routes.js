var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var hatesController = require('../controllers/hates');

// http://127.0.0.1:3000/characters
router.route('/')

  //GET all characters
  .get(hatesController.getAll)

  //POST a new blob
  .post(hatesController.createHate);

router.route('/:id')

  // GET return specific characters
  .get(hatesController.getHate)

module.exports = router
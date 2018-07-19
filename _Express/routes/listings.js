var express = require('express');
var router = express.Router();

var api = require('../public/javascripts/jsonRequest.js')

/* GET home page. */
router.get('/', function(req, res, next) {

  api.apiGet(function(data) {
    res.render('listings', { title: 'Test title', mockJSON: data});
  });
});

module.exports = router;

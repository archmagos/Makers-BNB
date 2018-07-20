var express = require('express');
var router = express.Router();

var api = require('../public/javascripts/jsonRequest.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  // api.apiGet(function(data) {
  //   res.render('listing', { title: 'Listing', listingsJSON: data});
  // });
});

module.exports = router;

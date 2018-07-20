var express = require('express');
var router = express.Router();

var api = require('../public/javascripts/jsonRequest.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  api.apiGet(function(data) {
    res.render('listing', { title: 'Listing', listingJSON: data.listings[req.query.id - 1]});
  });
});

module.exports = router;

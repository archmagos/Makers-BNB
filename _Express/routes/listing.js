var express = require('express');
var router = express.Router();

var api = require('../public/javascripts/jsonRequest.js');
var api2 = require('../public/javascripts/jsonRequest2.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var bookings
  api2.apiGet(function(data) {
    bookings = data.bookings
  });

  api.apiGet(function(data) {
    id = req.query.id
    relevantListing = data.listings[req.query.id - 1];
    relevantBookings = bookings.filter(booking => booking['listing_id'] == id)
    res.render('listing', {
      title: 'Listing',
      listingJSON: relevantListing,
      bookings: relevantBookings
    });
  });
});

module.exports = router;

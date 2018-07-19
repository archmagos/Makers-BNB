var express = require('express');
var router = express.Router();
var $ = require('jquery');

// require("jsdom").env("", function(err, window) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
//
// 	$ = require("jquery")(window);
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log($);
  listings = $.getJSON('http://localhost:9292/listings')

  // mockJSON = {
  //   "listings": [
  //     { "title":"Jolly Roger", "description":"This ship is baller", "price":2400},
  //     { "title":"Jolly David", "description":"This ship is awful", "price":1100}
  //   ]};
  res.render('listings', { title: 'Test title', mockJSON: listings});
});

module.exports = router;

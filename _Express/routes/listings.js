var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //listings = $.getJson('localhost:9292/listings');
  mockJSON = {
    "listings": [
      { "title":"Jolly Roger", "description":"This ship is baller", "price":2400},
      { "title":"Jolly David", "description":"This ship is awful", "price":1100}
    ]};
  res.render('listings', { title: 'Test title', mockJSON: mockJSON});
});

module.exports = router;

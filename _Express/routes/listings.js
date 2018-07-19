var express = require('express');
var router = express.Router();
var $ = require('jquery');
var fetcher = function(url){
  $.getJSON(url);
}

// require("jsdom").env("", function(err, window) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
//
// 	$ = require("jquery")(window);
// });
// function loadJSON(path)//, success, error)
// {
//     var xhr = new XMLHttpRequest();
//     // xhr.onreadystatechange = function()
//     // {
//     //     if (xhr.readyState === XMLHttpRequest.DONE) {
//     //         if (xhr.status === 200) {
//     //             if (success)
//     //                 success(JSON.parse(xhr.responseText));
//     //         } else {
//     //             if (error)
//     //                 error(xhr);
//     //         }
//     //     }
//     // };
//     xhr.open("GET", path, true);
//     xhr.send();
// }
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log($);
  listings = fetcher('http://localhost:9292/listings');

  // mockJSON = {
  //   "listings": [
  //     { "title":"Jolly Roger", "description":"This ship is baller", "price":2400},
  //     { "title":"Jolly David", "description":"This ship is awful", "price":1100}
  //   ]};
  res.render('listings', { title: 'Test title', mockJSON: listings});
});

module.exports = router;

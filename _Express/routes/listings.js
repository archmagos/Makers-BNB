var express = require('express');
var router = express.Router();
var $ = require('jquery');

var request = require('request'); // require in request
var initGet = {uri: 'http://localhost:9292/listings'};
var initPost = {uri: 'http://localhost:9292/listings'};

var apiCaller = function (url, cb) {
  //use request to make the external http call to the JSON api
  request({
    url: url,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      cb(body);// Send body/response to callback
    }
  })
};
// Call the api with a call back
var apiGet = function(cb) {
  return apiCaller(initGet.uri, cb);
};

var apiPost = function(post, cb) {
  return apiCaller(initGet.uri + post, cb);
};
// Export the functions for external access
module.exports = {
  apiGet: apiGet,
  apiPost: apiPost
};
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
  // mockJSON = {
  //   "listings": [
  //     { "title":"Jolly Roger", "description":"This ship is baller", "price":2400},
  //     { "title":"Jolly David", "description":"This ship is awful", "price":1100}
  //   ]};
  apiGet(function (data) {
    // render to the index.jade and pass the data from api call
    console.log(data.listings)
    res.render('listings', {title: 'Test Title', listingsJSON: data});
  });
});

module.exports = router;

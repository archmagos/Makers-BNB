var request = require('request'); // require in request
var initGet = {uri: 'http://localhost:9292/bookings'};
var initPost = {uri: 'http://localhost:9292/bookings'};

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

var _ = require('lodash');
var request = require('request-promise');

request("http://jsonplaceholder.typicode.com/albums")
  .then(function(response){
    var albums = JSON.parse(response);
    var result = {};

    var result = _.groupBy(albums, 'userId');
    console.log(result);
  });
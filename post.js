var _= require('lodash');
var request = require('request-promise');

request("http://jsonplaceholder.typicode.com/posts")
  .then(function(response){
    var posts = JSON.parse(response);

    //loop over all posts and grab only the ones that begin with 'dolor'
    var importantPosts = .filter(posts, function(post){
      return _.startWith(post.tile, "dolor");
    })    

    console.log(importantPosts);
    console.log(importantPosts.length);
  })
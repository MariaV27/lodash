var _ = require("lodash");
// for( var i =0; i < 10; i++){
//     console.log(Math.floor(Math.random(100) * 100));
// }

// You can't print the same number twice


var randomArray = [];

_.times(100, function(){
    var random = (_.random(100);

    if(randomArray.length == 0) {
      randomArray.push(random);
    } else{
      while(tempRandomNumbers.indexOf(random) != -1){
        random = _.random(100);
      }
      randomArray.push(random);
    }
 })

console.log(randomArray);
console.log(randomArray.length);
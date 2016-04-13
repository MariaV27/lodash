var _ = require("lodash");
// for( var i =0; i < 10; i++){
//     console.log(Math.floor(Math.random(100) * 100));
// }

// You can't print the same number twice


var numberCount = 100;
var randomArray = [];
var steps = 0;

_.times(numberCount function(){
    var random = _.random(numberCount);

    while(_.includes(randomArray, random)){
      random = _.random(numberCount);
    }

    randomArray.push(random);
})


console.log(randomArray);
console.log(randomArray.length);
var _ = require("lodash");
// for( var i =0; i < 10; i++){
//     console.log(Math.floor(Math.random(100) * 100));
// }

_.times(10, function(){
    console.log(_.random(100));
})
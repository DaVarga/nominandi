/*
 * nominandi - name generator
 * example usage
 * MIT Licensed
 */

var Nominandi = require('./lib/Nominandi');
var nominandi = new Nominandi();

for(var i = 0; i < 10; i++){
    console.log(nominandi.generate());
}

console.log(nominandi.names());

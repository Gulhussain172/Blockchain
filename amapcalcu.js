console.log();
console.log( "===Array Map Calculator===" );
console.log();

var array1 = [100, 150, 200, 250];

var map1 = array1.map(x => x * 5);
var map2 = array1.map(x => x + 5);
var map3 = array1.map(x => x - 5);
var map4 = array1.map(x => x / 5);
var map5 = array1.map(x => x % 10.5);


console.log("Multi  :", map1);
console.log("Add    :", map2);
console.log("Sub    :", map3);
console.log("Div    :", map4);
console.log("Per    :", map5);
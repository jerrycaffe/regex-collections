// The g flag is mostly important for stating that all instances of the word must be visited, without the g flag it will only match the first chararcter that matches the given but with g flag it will pick as many as possible matching the expression
// The word repeat will be returned from this example
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex); 

console.log(result, 'this should return all the removed words');
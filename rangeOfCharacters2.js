// The example below will match between 2 to 6 and as well from h to s
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex); 

console.log(result, 'picks number from 3 to 6 and alphabets from h to s');
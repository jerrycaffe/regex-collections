// Range of characters can be specified with the use of []
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 

console.log(result, 'this will match all the letters from a to z in the given word both upper and lower case');
// the match will extract words that match the given characters within the strings
let extractStr = "Extract the word coding from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

console.log(result, 'this will return coding');
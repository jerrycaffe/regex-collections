// This checks if a character matches one or more time 
let difficultSpelling = "Mississipspi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

console.log(result);
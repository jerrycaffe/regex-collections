// The i flag is used to ignore case in regex and when it is passed all the character will be ignored 

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result, 'this should return true since the case has been ignored')
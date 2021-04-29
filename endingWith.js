// Caret matches at the beginning of the sentences while the $ is used to match ending
let caboose = "The last car on a  train is the caboose";
let lastRegex = /caboose$/; // 
let result = lastRegex.test(caboose);
console.log(result); //returns true because it is at the end of the string
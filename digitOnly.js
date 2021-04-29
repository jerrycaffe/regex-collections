//\d this matches digit alone
//\D this matches digit none numbers which is the opposite of the one above
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let nonNumRegex = /\D/g; // Change this line
let result = numString.match(numRegex).length; //returns 3 because of 5 00
let resultNon = numString.match(nonNumRegex).length; //returns 24
console.log(result, resultNon);
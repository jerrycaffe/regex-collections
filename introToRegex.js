// Regex is used to match pattern of strings in programming
// Quotation is not allowed
// match the word the in the sentence below
let sentence = "The dog chased the cat."
let regex = /the/

// To test a method we use the test method
let myString = "Hello, World!";
let myRegex = /Hello/;
// The code checks if myRegest can be found inside myString which will return true or false
let result = myRegex.test(myString); 
console.log(result)
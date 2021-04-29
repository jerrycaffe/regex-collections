// Using the caret can be useful in saying that the specified ranges are not to be included in the search, example below will match all characters except 0 to 9 and a e i o u
// caret matches the beginning but $ matches the ending character of a string
let quoteSample = "3 blind mice.";
let caboose = "Cal The last car on a train is the caboose";
let calRegex = /^Cal/;
let myRegex = /[^0-9aeiou]/ig; 
let calResult = caboose.match(calRegex) //this should return Cal because it is at the beginning for the word caboose but it will not return anything if it is removed and put in another place
let result = quoteSample.match(myRegex); 

console.log(result, 'I dont want to see from 0 to 9 and as well a e i o should be missing');
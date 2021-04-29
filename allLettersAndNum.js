// \w is a shorthand for matching a - z A-Z 0 - 9 and _
// \W is a shorthand for excluding a -z A -Z 0 - 9 and _ which means the opposite of the one above
// please note that lowercase w means include all while uppercase W means exclude all
let quoteSample = "The five boxing wizards jump quickly. /-+*&^%$#@!";
let alphabetRegexV2 = /\w/g; // Change this line
let excludeAlphabetRegexV2 = /\W/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length; // returns 31
let resultExclude = quoteSample.match(excludeAlphabetRegexV2).length; //returns 6 this includes white space and ./ and other special characters but not including _
console.log(result, resultExclude);
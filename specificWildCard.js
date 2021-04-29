// The use of [] can be used to specify the characters to match and ignore others e.g in the example below bag, big, bug b[aiu]g will only be matched and others will be ignored because our letter starts with b and ends with g
let bgRegex = /b[aiu]g/;
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result, 'this should return all vowels in the given strings');
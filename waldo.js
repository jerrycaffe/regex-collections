let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
// Please note that this is case sensitive
console.log(result, 'checks if waldo Regex is embedded in waldo is hiding which retuyrns true if it is and false if it is not')
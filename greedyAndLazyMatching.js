// Greedy finds the longest part of a string that fits the regex pattern and return it as a match
// Lazy match finds the smallest possible part of a string and returns that 
// Regex patterns is default to greedy

let string = "titanic";
let greedy = /t[a-z]*i/; 
string.match(greedy); //this returns the word titani because it performs greedy match 
// by searching for t[and any word between a to z] and the * indicates any number of occurrence then it ends at i

let lazy = /t[a-z]*?i/;
string.match(lazy); //this returns the word ti because it performs lazy match which stops after getting t and i

let text = "<h1>Winter is coming</h1>";
let greedyRegex = /<.*>/; 
let lazyRegex = /<.*?>/; 
let resultGreedy = text.match(greedyRegex); //this performs greedy match giving <h1>Winter is coming</h1>
let resultLazy = text.match(lazyRegex); //this performs lazy match giving <h1>
console.log(resultGreedy, resultLazy);
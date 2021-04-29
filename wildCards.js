// The dot . is called the wildcard which can be used to match any world
// in the example below hu. will match any character having a pattern that starts with hu and any letter that comes there after
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result, 'this will return true');
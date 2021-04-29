// The pipe character | is used in regex to check any of the given word which returns true once any of the character is found in the given string
let petString = "James has a pet cat.";
let petRegex = /dog|bird|fish/;
let result = petRegex.test(petString);
console.log(result, 'to find or operation using the pipe character |')
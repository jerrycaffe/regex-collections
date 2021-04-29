// Group of criminals escapes from prison but they stay together whenever they are together, given in this word C represents the criminals find the criminals


let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
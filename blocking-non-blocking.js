const fs = require('fs');

// Blocking operation Synchronously 
console.log("Starting the program...");
const userData = fs.readFileSync("context.txt", "utf8");
console.log(userData);
console.log("Finished reading the file.");
//-------------------------------------------------------------------------
// Non-blocking operation Asynchronously
console.log("Starting the program...");  // 1st run
fs.readFile('context.txt', 'utf8',( err, result) => { 
    console.log(result);    // then log the result after reading the file
});
console.log("Finished reading the file."); // 2nd run
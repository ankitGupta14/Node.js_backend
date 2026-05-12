const fs = require('fs');


// Synchronously write "Hello, World!" to a file named "hello.txt"
fs.writeFileSync('hello.txt', 'Hello, World!');

//Asynchronously read the contents of "hello.txt" and log it to the console
 fs.readFile('context.txt', 'utf8', (err, data) => {
    if (err) {  
        console.error(err);
        return;
    }   
    console.log(data);
});

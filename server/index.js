const http = require('http');
const fs = require('fs');


const Server = http.createServer((req, res) => {
    console.log =` ${Date.now()}: ${req.url} New Req Recived\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case "/":
                res.end('home page');
                break;
            case "/about":
                res.end('i am ankit');
                break;
            default:
                res.end('404 Not Found'); 
        }
    });

    // console.log("New request received");
    // // console.log(req.headers);
    // res.end('Hello, server is running!');
    // console.log(res)
})
Server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
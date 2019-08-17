const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) => {

    res.setHeader('Content-Type','text/plain');
    res.statusCode = 200;
    res.end('Hello World');
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
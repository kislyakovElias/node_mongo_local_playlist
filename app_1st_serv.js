const http = require('http');

const server = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log("yo you've listening port 3000")
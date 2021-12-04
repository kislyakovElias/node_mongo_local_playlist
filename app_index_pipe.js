const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res){
    console.log('req was made: ' + req.url)
    res.writeHead(200,{'Content-Type': 'text/html'});
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res)
    // res.end('Hey yall all!')
});

server.listen(3000, '127.0.0.1');
console.log('Hey, Im listeniing the port 3000')



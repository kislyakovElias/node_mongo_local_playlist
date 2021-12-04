const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res){
    console.log('req was made: ' + req.url)
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contacts.html').pipe(res);
    } else if(req.url === '/api/ninjas') {
        const ninjas = [{ name: 'Ryu', job: 'Ninja', age: 29 }, { name: 'RAd', job: 'Ninja', age: 39 }];
        res.writeHead(200, {'Content-type': 'Application/json'});
        res.end(JSON.stringify(ninjas))
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }


    // const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(res)
});

server.listen(3000, '127.0.0.1');
console.log('Hey, Im listeniing the port 3000')



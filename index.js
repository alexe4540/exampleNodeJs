const http = require('http');
const server = http.createServer(function(req, res) {
    console.log("URL: " + req.url);
    res.writeHead(200, {'Content_type': 'text/plain; charset=utf-8'});
    res.end('Hello world!')
});

server.listen(3000, 'localhost');
console.log("Server run on port 3000");

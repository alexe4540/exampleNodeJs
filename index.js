const fs = require("fs");

const http = require("http");
const server = http.createServer(function(req, res) {
  console.log("URL: " + req.url);
  if (req.url === "/index" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const myReadShort = fs.createReadStream(__dirname + "/index.html");

    myReadShort.pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const myReadShort = fs.createReadStream(__dirname + "/about.html");

    myReadShort.pipe(res);
  } else{
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    const myReadShort = fs.createReadStream(__dirname + "/404.html");

    myReadShort.pipe(res);
  }
});

server.listen(3000, "localhost");
console.log("Server run on port 3000");

const fs = require("fs");

const http = require("http");
const server = http.createServer(function(req, res) {
  console.log("URL: " + req.url);
  res.writeHead(200, { 'Content-Type': "text/html; charset=utf-8" });
  const myReadShort = fs.createReadStream(__dirname + "/index.html");

  myReadShort.pipe(res);
});

server.listen(3000, "localhost");
console.log("Server run on port 3000");

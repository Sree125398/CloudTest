var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('Sreekanth!');
};
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);
var httprequest = require('http');
var fs = require('fs');


httprequest.createServer(function (req , resp) {
resp.writeHead(200 , {'Content-Type' : 'text/html' });
var html = fs.readFileSync(__dirname + "/index.html" , 
"utf8");

var name = "mahesh";
html = html.replace('{name}' , name);
resp.send(html);

}).listen(1337 , '127.0.0.1');

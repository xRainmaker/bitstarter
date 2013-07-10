Avar express = require('express');
//var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
var fs = require('fs');

//var buffer = new buffer ();

//response.send(fs.readFileSync("index.html", {encoding:"utf8"});
//response.send(fs.readFileSync("index.html", "utf8");

var buf = new Buffer (fs.readFileSync("index.html", "utf-8"));

response.send(buf.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


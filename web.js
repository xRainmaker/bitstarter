Avar express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');

//var fs = require('fs');

var buffer = new buffer ();
    response.send(fs.readFilesync("index.html", "utf8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


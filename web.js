var express = require('express');
var fs = require('fs');

var welcomeMessage = fs.readFileSync('index.html').toString()

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(welcomeMessage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var request = require('request');

var app = express();
app.get('/c1', function(req, res){
  var url = req.query.url;
  request(url).pipe(res);
});

app.listen(3000);
console.log ('listen!');

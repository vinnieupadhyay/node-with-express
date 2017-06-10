var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.get('/', function(req, res) {
    res.send('Hello wordl!');
});

var server = app.listen(3000, function() {
  console.log('App running on port 3000');
});

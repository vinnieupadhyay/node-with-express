var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

//Set dynamic port environment and default to 3000
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('Hello wordl!');
});

var server = app.listen(app.get('port'), function() {
  console.log('App running on port ' + app.get('port'));
});

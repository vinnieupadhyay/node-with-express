var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

//Set dynamic port environment and default to 3000
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send(`
        <h1>Welcome</h1>
        <p>Meetups put together artists form all walks of life.</p>
    `);
});

app.get('/speakers', function(req, res) {
    var info = '';
    dataFile.speakers.forEach(function(item) {
        info += `
            <li>
                <h3>${item.name}</h3>
                <p>${item.summary}</p>
            </li>
        `;
    });
    res.send(`
        <h2>Lecture Speakers</h2>
        ${info}
    `);
});

app.get('/speakers/:speakerid', function(req, res) {
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h2>${speaker.title}</h2>
        <h3>${speaker.name}</h3>
        <p>${speaker.summary}</p>
    `);
});


var server = app.listen(app.get('port'), function() {
  console.log('App running on port ' + app.get('port'));
});

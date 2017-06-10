var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res) {
    var info = '';
    var dataFile = req.app.get('appData');
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

router.get('/speakers/:speakerid', function(req, res) {
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h2>${speaker.title}</h2>
        <h3>${speaker.name}</h3>
        <p>${speaker.summary}</p>
    `);
});

module.exports = router;

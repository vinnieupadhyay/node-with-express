var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(`
        <h2>Welcome</h2>
        <p>Meetups put together artists form all walks of life.</p>
    `);
});

module.exports = router;

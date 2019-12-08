const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

app.get('/news/:id', function (req, res) {
    res.send(`ID - ${req.params.id}`);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
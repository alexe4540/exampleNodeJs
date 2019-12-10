const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/news/:id', function (req, res) {
    let obj = {title: "news", id: "25", par : ['paragraphs', 'first', 'numbers', 569, true]}
    res.render('news', {newsId : req.params.id, randomNumber: Math.random(), obj : obj});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
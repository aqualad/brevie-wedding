var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/app/templates'));
app.set('view engine', 'hbs');

// Route to static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/save-the-date', function (req, res) {
	res.render('index');
});

app.listen(3000, function () {
  console.log('WeddingApp listening on port 3000!');
});

module.exports = app;

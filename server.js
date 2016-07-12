var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/app/templates'));
app.set('view engine', 'hbs');

// Route to static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


// Home
app.get('/', function (req, res) {
    res.render('index');
});

// Old Save the Date page
app.get('/save-the-date', function (req, res) {
    res.render('index');
});

// Standalone RSVP Page
app.get('/rsvp', function (req, res) {
    res.render('index');
})

app.get(/.*/, function (req, res) {
    res.redirect('/');
});

app.listen(3000, function () {
  console.log('WeddingApp listening on port 3000!');
});

module.exports = app;

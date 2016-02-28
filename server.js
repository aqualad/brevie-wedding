var express = require('express');
var path = require('path');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Route to static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;

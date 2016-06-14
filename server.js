var express = require('express');
var app = express();

// Get Config Object
var config = require('./server/config/config');

// Configure Express
require('./server/config/express')(app, config);

// Connect to DB
require('./server/config/mongoose')(config);

// Configure routes
require('./server/config/routes')(app);

app.listen(3000, function () {
  console.log('WeddingApp listening on port 3000!');
});

module.exports = app;

var express = require('express');
var path = require('path');

module.exports = function(app, config) {
    // view engine setup
    app.set('views', path.join(config.rootPath, 'public/app/templates'));
    app.set('view engine', 'hbs');

    // Route to static files
    app.use(express.static(path.join(config.rootPath, 'public')));
    app.use('/bower_components', express.static(config.rootPath + '/bower_components'));
}

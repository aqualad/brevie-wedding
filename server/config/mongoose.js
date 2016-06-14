var mongoose = require('mongoose')

module.exports = function(config) {
    // Connect to Mongo
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('breviewedding db opened');
    })
}

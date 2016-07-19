var express = require('express');
var path = require('path');
var config = require('./secret/config');
var bodyParser = require('body-parser');
var moment = require('moment');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/app/templates'));
app.set('view engine', 'hbs');

// Route to static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Middleware for json encoded bodies
app.use(bodyParser.json());

// Home
app.get('/', function (req, res) {
    res.render('index');
});

// Old Save the Date page
app.get('/save-the-date', function (req, res) {
    res.render('index');
});

// Endpoint for RSVP form
app.post('/rsvp', function (req, res) {
    // Get the client's IP
    var ip = req.ip

    // Get form values
    var guest = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        name: req.body.firstName + ' ' + req.body.lastName,
        email: req.body.email,
        phone_number: req.body.phone,
        rsvp: req.body.rsvp
    }

    // Data Validation
    // TODO GENERAL VALIDATION

    // Load up whitelist
    var guestlist = require('./secret/guestlist');

    // Verify that we can match the RSVP to a guest
    if ( guestlist.last_names.indexOf(guest.last_name.toLowerCase()) === -1 ) {
        return res.status(401).send( { field: 'last_name'} );
    }

    // Import email library
    var nodemailer = require('nodemailer');

    // Get email config
    var email = config.email,
        from = '"' + guest.name + '" <' + guest.email + '>',
        to = email.recipient,
        subject = '[RSVP] ' + ( guest.rsvp ? 'Confirmed' : 'Declined') + ' for ' + guest.name;

    var body = 'Name: ' + guest.name + '<br />' +
               'Email: ' + guest.email + '<br />' +
               'Phone Number: ' + guest.phone_number + '<br />' +
               'RSVP: ' + ( guest.rsvp ? 'Yes' : 'No' ) + '<br /><br />' +
               'Submitted: ' + moment().format('MMMM Do YYYY, h:mm:ss a');

    // Create transporter object
    var transporter = nodemailer.createTransport('smtps://' + email.username + ':' + email.password + '@' + email.host);

    // Setup Email
    var emailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: body
    }

    // Send Email
    transporter.sendMail(emailOptions, function (error, info) {
        if ( error ) {
            return res.status(500).send( { message: 'Email failed to send' } );
        }
    });

    // If we made it all the way down here, we did it!
    return res.status(200).send( { message: 'RSVP Received' } );
})

app.get(/.*/, function (req, res) {
    res.redirect('/');
});

app.listen(3000, function () {
  console.log('WeddingApp listening on port 3000!');
});

module.exports = app;

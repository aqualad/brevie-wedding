module.exports = function(app) {
    // Render index for all GET requests
    app.get('*', function (req, res) {
        res.render('index');
    });

    // Handle RSVP Submission
    app.post('/rsvp', function (req, res, next) {
        /* TODO: Implement
            Validation
                1. Normal field formatting (phone number, email, etc)
                2. Check that the phone number, email, or last name exists in the database as a valid guest
                3. If the guest has already RSVP'd, alert the user
        */

        res.send({success:true});
    });
}

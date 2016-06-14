module.exports = function(app) {
    // Render index for all GET requests
    app.get('*', function (req, res) {
        res.render('index');
    });
}

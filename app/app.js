var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {title: "Evie McMahon and Bryan Dodd Wedding - September 9th, 2016"});
});

module.exports = router;

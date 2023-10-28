var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num1 = Math.floor(Math.random() * 100) + 1;
  var num2 = Math.floor(Math.random() * 100) + 1;

  res.render('index', {
    title: 'Express',
    num1: num1,
    num2: num2
  });
});

module.exports = router;

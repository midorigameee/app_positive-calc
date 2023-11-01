var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num1 = Math.floor(Math.random() * 100) + 1;
  var num2 = Math.floor(Math.random() * 100) + 1;

  res.render('index', {
    title: 'Calcuration',
    num1: num1,
    num2: num2
  });
});

router.post('/result', function(req, res, next) {
  if(req.body.result == undefined){
    console.log("result undefined");
    res.redirect("/");
    return;
  }
  
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = Number(req.body.result);
  var result_message = "Oh...";

  var judgement = false;
  if((num1+num2) == result){
    judgement = true;
    result_message = "Congratulations!!"
  }

  res.render('result', {
    title: 'Result',
    result_message: result_message,
    judgement: judgement
  });
});

module.exports = router;

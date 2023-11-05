var express = require('express');
var router = express.Router();

const WORD_NUM = 8;
const WORD_LIST = [
  "脳の回転速すぎて火が出る！",
  "アインシュタインの生まれ変わり！",
  "脳みその皺がラビリンス！",
  "ベガバンクもびっくり！",
  "人間国宝！ルーブル美術館に展示したい！",
  "脳みそ詰まりすぎ、密です！",
  "脳みそは密でいいんだよ！",
  "羂索「キッショ、なんで分かるんだよ」"
];

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
  var result_text = "伸びしろは無限大…！";

  var judgement = false;
  if((num1+num2) == result){
    judgement = true;
    result_message = "Congratulations!!"
    result_text = "正解！天才です！！";
  }

  var result_words = [];
  for(var i=0; i<WORD_NUM; i++){
    var temp = "";
    if(judgement) temp = WORD_LIST[i];

    result_words.push(temp);
  }

  res.render('result', {
    title: 'Result',
    result_message: result_message,
    result_text: result_text,
    result_words: result_words
  });
});

module.exports = router;

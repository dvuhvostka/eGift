var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('confirm',{
    title: "e-giftCard - анонимность в деньгах. | Ввод номера",
  });
});

module.exports = router;

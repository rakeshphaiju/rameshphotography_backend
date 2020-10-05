const express = require('express')
const mongoose = require('mongoose')


const messageCtrl = require('../controllers/message-ctrl')

//Load model
const Message = require('../models/message-model')



//const messageSchema = require('../models/message-model');
const router = express.Router()

router.post('/add', messageCtrl.addMessage)
router.get('/message', messageCtrl.getMessage)
//router.delete('/message/:id', messageCtrl.deleteMessage)
  
// Defined delete | remove | destroy route
router.delete('/message/:id', function(req, res, next) {
  Message.findByIdAndRemove(req.params.id, req.body, function (err, message) {
    if (err) return next(err);
    res.json(message);
  });
});


module.exports = router
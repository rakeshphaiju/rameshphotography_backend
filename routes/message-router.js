const express = require('express')


const messageCtrl = require('../controllers/message-ctrl')

const router = express.Router()

router.post('/add', messageCtrl.addMessage)
router.get('/message', messageCtrl.getMessage)

module.exports = router
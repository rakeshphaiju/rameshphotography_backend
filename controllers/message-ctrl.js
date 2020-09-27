const Message = require('../models/message-model')

addMessage = (req, res) => {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must write a message',
    })
  }

  const message = new Message(body)

  if(!message){
    return res.status(400).json({ success: false, err: err })
  }

  message.save().then(() => {
    return res.status(200).json({
      success: true,
      id: message._id,
      message: 'Message sent',

    })
  })
  .catch(error => {
    return res.status(400).json({
      error,
      message: 'Message is not sent',

    })
  })
}

getMessage = async (req, res) => {
  await Message.find({}, (err, messages) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!messages.length){
      return res
        .status(404)
        .json({ success:false, error: 'Message not found'})
    }
    return res.status(200).json({ success: true, data: messages})
  }).catch(err => console.log(err))
}

module.exports = {addMessage, getMessage}
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const messageRouter = require('./routes/message-router')

const app = express()
const PORT = 4000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'Database connection error'))

app.use('/', messageRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}` ))
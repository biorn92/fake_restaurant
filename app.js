var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
var restaurant = require('./routes/restaurant')
var users = require('./routes/users')

var cors = require('cors')
app.use(cors())
app.use('/restaurant', restaurant)
app.use('/users', users)

app.listen(3001)
module.exports = app

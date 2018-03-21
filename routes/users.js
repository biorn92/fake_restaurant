var express = require('express')
var router = express.Router()
var fakeRestaurant = require('fake_restaurant_service')

var auth = function (req, res, next) {
  if (req.query.token !== undefined && fakeRestaurant.allId().includes(parseInt(req.query.token))) {
    req.query.token = parseInt(req.query.token)
    return next()
  }
  res.status(401).json({message: 'Token not valid'})
}

router.post('/', auth, function (req, res) {
  fakeRestaurant.newOrder(req.body)
  res.status(201).json({mess: 'Order created'})
})

router.get('/:id/:user', auth, function (req, res) {
  res.json(fakeRestaurant.ordersByUser(req.params.user, parseInt(req.params.id)))
})

module.exports = router

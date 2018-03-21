var express = require('express')
var router = express.Router()
var fakeRestaurant = require('fake_restaurant_service')

var auth = function (req, res, next) {
  if (req.query.token === 'admin') {
    return next()
  }
  res.status(401).json({message: 'Token not valid'})
}

router.get('/orders', auth, function (req, res) {
  res.json(fakeRestaurant.allOrders())
})

router.delete('/:id', auth, function (req, res) {
  if (!isNaN(req.params.id)) {
    fakeRestaurant.deleteOrder(parseInt(req.params.id))
    res.status(201).json({mess: 'Order deleted'})
  }
  res.status(400).json()
})

router.put('/:id', auth, function (req, res) {
  if (!isNaN(req.params.id)) {
    fakeRestaurant.setOrders(parseInt(req.params.id), req.body.newStatus)
    res.status(201).json({mess: 'Order edited'})
  }
  res.status(400).json()
})

router.get('/:status', auth, function (req, res) {
  if (isNaN(req.params.status)) {
    res.json(fakeRestaurant.filterOrders(req.params.status))
  }
  res.status(400).json()
})

router.get('/', auth, function (req, res) {
  res.json({profit: fakeRestaurant.total()})
})

router.get('/:id/:user', auth, function (req, res) {
  res.json(fakeRestaurant.ordersByUser(req.params.user, parseInt(req.params.id)))
})

module.exports = router

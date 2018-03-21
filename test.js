var assert = require('assert')
const request = require('supertest')
const app = require('./app')

describe ('GET /restaurant', function () {
  it('test success restaurant', function (done) {
    request(app)
      .get('/restaurant/orders?token=admin')
      .set('accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})
describe ('DELETE /restaurant', function () {
  it('test success', function (done) {
    request(app)
      .delete('/restaurant/0?token=admin')
      .set('accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
  it('test failed when id is not a number', function (done) {
    request(app)
      .delete('/restaurant/ciao?token=admin')
      .set('accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})

describe ('PUT /restaurant', function () {
  it('test success', function (done) {
    request(app)
      .put('/restaurant/0?token=admin')
      .set('accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
  it('test failed when id is not a number', function (done) {
    request(app)
      .put('/restaurant/ciao?token=admin')
      .set('accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})
describe ('GET /restaurant', function () {
  it('test success restaurant', function (done) {
    request(app)
      .get('/restaurant/new?token=admin')
      .set('accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
  it('test failed when status is a number', function (done) {
    request(app)
      .get('/restaurant/5?token=admin')
      .set('accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})

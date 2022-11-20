require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, detail, update,insert,detailOrder } = require('../controller/order.controller')


const router = express.Router()


router
  .get('/order', list)
  .get('/orderproduct/:id', detailOrder)
  .get('/order/:id', detail)
  .put('/order/:id',update)
  .post('/order',insert)
  .post('/orderscoy',insert)
module.exports = router

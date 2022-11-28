const express = require('express')
const { list, detail, update,insert,detailOrder,detailUserOrder,insertTransaction,listTransaksi,listTransaksiID, allOrderedProduct } = require('../controller/order.controller')

const router = express.Router()

router
  .get('/order', list)
  // .get('/order/lagi', list2)
  .get('/order/user/:id', detailUserOrder)
  .get('/order/seller/:id', allOrderedProduct)
  .get('/orderproduct/:id', detailOrder)
  .get('/order/:id', detail)
  .put('/order/:id',update)
  .post('/order',insert)
  .get('/transaction', listTransaksi)
  .get('/transaction/:id', listTransaksiID)
  .post('/transaction',insertTransaction)
  
module.exports = router

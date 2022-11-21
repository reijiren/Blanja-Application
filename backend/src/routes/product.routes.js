const express = require('express')
const { list, destroy, detail, update,insert,detailProduct,searchName } = require('../controller/product.controller')
const {uploadPhoto} = require('../middleware/uploadImg')
const {removePhoto}= require('../middleware/deleteImg')

const router = express.Router()


router
  .get('/product', list)
  .get('/product/:id', detail)
  .get('/productjoin/:id', detailProduct)
  .get('/product/search/:search', searchName)
  .put('/product/:id',removePhoto,uploadPhoto,update)
  .delete('/product/:id',removePhoto, destroy)
  .post('/product',uploadPhoto,insert)
  
module.exports = router

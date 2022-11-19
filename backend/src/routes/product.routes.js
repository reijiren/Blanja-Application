require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail, update,insert } = require('../controller/product.controller')
const {uploadPhoto} = require('../middleware/uploadImg')
const {removePhoto}= require('../middleware/deleteImg')

const router = express.Router()


router
  .get('/product', list)
  .get('/product/:id', detail)
  .put('/product/:id',removePhoto,uploadPhoto,update)
  .delete('/product/:id',removePhoto, destroy)
  .post('/product',uploadPhoto,insert)
  .post('/productscoy',insert)
module.exports = router

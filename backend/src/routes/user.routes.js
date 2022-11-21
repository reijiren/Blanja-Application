require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail, updateUser, register,login,listSeller,detailSeller,updatePhoto } = require('../controller/user.controller')
const {uploadPhotouser} =require ('../middleware/uploadImg');
const {removePhotoUser}= require('../middleware/deleteImg')

const router = express.Router()


router
  .get('/userlist', list)
  .get('/user/:id', detail)
  .get('/seller', listSeller)
  .get('/seller/:id', detailSeller)
  .put('/user/:id',updateUser)
  .delete('/user/:id', destroy)
  .post('/register', register)
  .post('/login',login)
  .put('/user/:id',removePhotoUser,uploadPhotouser,updatePhoto);

module.exports = router

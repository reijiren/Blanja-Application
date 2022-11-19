const productModel = require('../model/product.model');
const {successWithToken ,failed, success}= require('../helper/response');

const userController = {
  // method
  list: (req, res) => {
    productModel
      .selectAll()
      .then((result) => {
        success(res, result, 'success','get all user succes')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','get all user failed')
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    productModel
      .selectDetail(id)
      .then((result) => {
        success(res, result, 'success','by id user success')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','by id user failed')
      })
  },
  insert: (req, res) => {
    try {
      //image
      const photo = req.file.filename
      //tangkap data dari body
      const { product_name,price ,stock,condition,color,size,category,description} = req.body;

          const data = {
            product_name,price ,stock,condition,photo,color,size,category,description
          }

          productModel.store(data).then((result) => {
              success(res, result, 'success', 'upload product success')

          }).catch((err) => {
              console.log(data)
              failed(res, err.message, 'failed', 'upload product failed')
          })
        } catch(err) {
      failed(res, err.message, 'failed', 'internal server error');
  }
  },
  update: (req, res) => {
    const id = req.params.id
    const photo=req.file.filename
    // eslint-disable-next-line camelcase
    console.log(id)
    const { product_name, price ,stock,condition,color,size,category,description} = req.body
    const data = {product_name,price ,stock,condition,photo,color,size,category,description,id}
    productModel
      .updateProduct(data)
      .then((result) => {
        // res.json('Account Updated')
        success(res, result, 'success', 'upload product success')
      })
      .catch((err) => {
        // console.log(data)
        // console.log(err)
        // res.json(err)
        failed(res, err.message, 'failed', 'internal server error');
      })
  },
  destroy: (req, res) => {
    productModel
      .delete(req.params.id)
      .then((result) => {
        res.json('Account Deleted')
      })
      .catch((err) => {
        res.json(err)
      })
  },
}

module.exports = userController

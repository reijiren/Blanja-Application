const productModel = require('../model/product.model');
const {failed, success}= require('../helper/response');

const productController = {
  // method
  list: (req, res) => {
    productModel
      .selectAll()
      .then((result) => {
        success(res, result, 'success','get all products success')
      })
      .catch((err) => {
        failed(res, err.message,'failed','failed to get all products')
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
  detailProduct: (req, res) => {
    const id = req.params.id;
    productModel
    .selectJoin(id)
    .then((result) => {
      success(res, result, 'success', 'get detail product success')
    })
    .catch((err) => {
      failed(res, err.message, 'failed', 'failed to get product failed')
    })
  },
  searchName: (req, res) => {
    const search = req.params.search
    productModel
      .checkProduct(search)
      .then((result) => {
        success(res, result, 'success', 'find product by name success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'failed to find product by name')
      })
  },
  insert: (req, res) => {
    try {
      //image
      const photo = req.file.filename
      //tangkap data dari body
      const { seller,product_name,price ,stock,condition,color,size,category,description } = req.body;

      const data = {
        seller,
        product_name,
        price,
        stock,
        condition,
        photo,
        color,
        size,
        category,
        description
      }

      productModel.store(data).then((result) => {
          success(res, result, 'success', 'insert product success')

      }).catch((err) => {
          failed(res, err.message, 'failed', 'insert product failed')
      })
    } catch(err) {
      failed(res, err.message, 'failed', 'internal server error');
    }
  },
  update: (req, res) => {
    try{
      const id = req.params.id
      const photo = req.file.filename;
      
      const { product_name, price ,stock,condition,color,size,category,description} = req.body
      const data = {product_name,price ,stock,condition,photo,color,size,category,description,id}
      
      
      productModel
      .updateProduct(data)
      .then((result) => {
        success(res, result, 'success', 'update product success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'update product failed')
      })
    } catch(err){
      failed(res, err.message, 'failed', 'internal server error');
    }
  },
  destroy: (req, res) => {
    productModel
      .delete(req.params.id)
      .then((result) => {
        success(res, result, 'success', 'delete product success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'delete product failed')
      })
  },
}

module.exports = productController

const orderModel = require('../model/order.module');
const {failed, success}= require('../helper/response');

const orderController = {
  // method
  list: (req, res) => {
    orderModel
      .selectAll()
      .then((result) => {
        success(res, result, 'success','get all orders succes')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','get all orders failed')
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    orderModel
      .selectDetail(id)
      .then((result) => {
        success(res, result, 'success','by id orders success')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','by id orders failed')
      })
  },
  detailOrder: (req, res) => {
    const id = req.params.id;

    orderModel.selectJoin(id)
    .then((result) => {
        success(res, result.rows, 'success', `get detail orders success`);
    })
    .catch((err) => {
        failed(res, err.message, 'failed', `failed to get orders detail`);
    })
},
  insert: (req, res) => {
    try {
      //image
    //   const photo = req.file.filename
      //tangkap data dari body
      const {userid,item, quantity,color,size,status} = req.body;

          const data = {
            userid,item,quantity,color,size,status
          }

          orderModel.store(data).then((result) => {
              success(res, result, 'success', 'upload orders success')
          }).catch((err) => {
              console.log(data)
              failed(res, err.message, 'failed', 'upload orders failed')
          })
        } catch(err) {
      failed(res, err.message, 'failed', 'internal server error');
  }
  },
  update: (req, res) => {
    const id = req.params.id
    // eslint-disable-next-line camelcase
    console.log(id)
    const { quantity,color,size,status} = req.body
    const data = {quantity,color,size,status,id}
    orderModel
      .updateProduct(data)
      .then((result) => {
        success(res, result,data, 'success', 'upload orders success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'internal server error');
      })
  }
}

module.exports = orderController
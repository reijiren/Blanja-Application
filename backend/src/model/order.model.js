const db = require('../config/db')
const orderModel = {
  // router 
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM orders', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM orders where id_order =${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  selectJoin: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from orders left join users on users.id_user = orders.userid
      left join product on product.id_product = orders.item where id_order = ${id}
      `, 
      (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  store: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`
          INSERT INTO orders (userid, item, quantity, color, size, status)
          VALUES
          (${data.userid}, ${data.item}, ${data.quantity}, '${data.color}', ${data.size}, ${data.status})
          `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  updateProduct: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      db.query(`
        UPDATE orders SET
        quantity = COALESCE ($1, quantity),
        color = COALESCE ($2, color),
        size = COALESCE ($3, size),
        status = COALESCE ($4, status)
        WHERE id_order = $5
        `,
        [data.quantity, data.color, data.size, data.status, data.id],
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },
  
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM orders WHERE id_order = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
}
module.exports = orderModel
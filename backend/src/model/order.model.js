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
  selectUserOrder: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from orders join users on users.id_user = orders.userid where userid = ${id}
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
  updateOrder: (data) => {
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
  storeTransaksi: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`
          INSERT INTO transactions (userid, id_order, payment_method, total_price,transaction_date)
          VALUES
          (${data.userid}, ${data.id_order}, '${data.payment_method}', ${data.total_price}, now())
          `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  selectAllTransaction: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM transactions', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  selectTransactionID: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM transactions where id =${id}`, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
}
module.exports = orderModel
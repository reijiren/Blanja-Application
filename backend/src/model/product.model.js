const db = require('../config/db')
const productModel = {
  // router 
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM product join seller on seller.id_seller = product.seller', (err, result) => {
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
      db.query(`SELECT * FROM product where id_product =${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  selectJoin: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from product left join seller on seller.id_seller = product.seller where id_product=${id}`
      , (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  checkProduct:(data)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from product where product_name ilike '%${data}%'`
      , (err, result)=>{
        if (err) {
          reject(err)
        }
        resolve(result);
      })
    })
  },  
  store: ( data) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO product (seller,product_name, price ,stock,condition,photo,color,size,category,description)
            VALUES
            (${data.seller},'${data.product_name}',${data.price},${data.stock},${data.condition},'${data.photo}','${data.color}',${data.size},'${data.category}','${data.description}')
            `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      }
      )
    })
  },
  updateProduct: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`
        UPDATE product SET
        product_name = COALESCE ($1, product_name),
        price = COALESCE ($2, price),
        stock = COALESCE ($3, stock),
        condition = COALESCE ($4, condition),
        photo = COALESCE ($5, photo),
        color = COALESCE ($6, color),
        size = COALESCE ($7, size),
        category = COALESCE ($8, category),
        description = COALESCE ($9, description)
        WHERE id_product = $10
        `,
        [data.product_name, data.price , data.stock, data.condition, data.photo, data.color, data.size, data.category, data.description, data.id],
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
      db.query(`DELETE FROM product WHERE id_product = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
}

module.exports = productModel
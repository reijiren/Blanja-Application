const db = require('../config/db')
const userModel = {
  // router 
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, result) => {
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
      db.query(`SELECT * FROM users where id_user=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  selectSeller: () => {
    return new Promise((resolve, reject) => {
        db.query(`
        select * from seller join users on users.id_user  = seller.id_seller;
        `, (err, res) => {
            if(err) return reject(err);
            resolve(res);
        })
    })
},
selectSellerId: (id) => {
  return new Promise((resolve, reject) => {
      db.query(`
      select * from seller join users on users.id_user = seller.id_seller where seller.id_seller = ${id};
      `, (err, res) => {
          if(err) return reject(err);
          resolve(res);
      })
  })
},

//   register:({name,email,password,user_type,image})=>{
//     return new Promise((resolve,reject)=>{
//         db.query(`insert into users (name,email, password,user_type,image,user_created) 
//         values
//         ('${name}','${email}','${password}',${user_type},'${image}', now())`,(err,res)=>{
//             if (err) {
//                 reject(err)
//               }
//               resolve(res)
//         })
//     })
//   },  
register:({name,email,password,user_type,store_desc,image})=>{
    return new Promise((resolve,reject)=>{
        db.query(`
        with ins1 as (
        insert into users (name,email, password,user_type,image,user_created) 
        values
        ('${name}','${email}','${password}', ${user_type},'${image}', now())
        returning id_user as user_id
        )
        insert into ${user_type === 1 ? 'customer' : 'seller'}
        (id_${user_type === 2 ? 'seller , store_desc': 'customer' }) 
        values ((select user_id from ins1)
        ${user_type === 2 ? `, '${store_desc}'` : ''});
        `,(err,res)=>{
            if (err) {
                reject(err)
              }
              resolve(res)
        })
    })
  },  
  // updateAccount: ({id,name,password,phone,image,main_address} ) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //      ` UPDATE users SET
  //       name = COALESCE ($1, name),
  //       password = COALESCE ($2, password),
  //       phone = COALESCE ($3, phone),
  //       image = COALESCE ($4, image),
  //       main_address = COALESCE ($5, main_address)
  //       WHERE id_user = $6
  //       `,
  //       [name,password,phone,image,main_address,id],(err, res) => {
  //         if (err) {
  //           reject(err)
  //         }
  //         resolve(res)
  //       })
  //     })
  //   },
   updateSeller: (id, data, pass) => {
        return new Promise((resolve, reject) => {
            db.query(`
            with upd as (
                update users set
                name = coalesce ($1, name),
                email = coalesce ($2, email),
                password = coalesce ($3, password),
                phone = coalesce ($4, phone),
                  image = coalesce ($6, image),
                main_address = coalesce ($7, main_address)
                where users.id_user  = seller.id_seller and users.id_user = $8
                returning *
            )
            update seller set
            job_type = coalesce ($5, seller.store_desc),
            from upd
            where seller.id_seller = $8;
            `, [data.name, data.email,pass, data.phone,  data.store_desc, data.image, data.main_address, id]
            , (err, res) => {
                if(err) return reject(err);
                resolve(res);
            })
        })
    },
    updatePhoto: (id, data) => {
      return new Promise((resolve, reject) => {
          db.query(`
          update users set image = '${data}' where id = ${id};
          `, (err, res) => {
              if(err) return reject(err);
              resolve(res);
          })
      })
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id_user = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  checkUEmail:(email)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from users where email='${email}'`, (err, result)=>{
        if (err) {
          reject(err)
        }
        resolve(result);
      })
    })
  },  

}
module.exports = userModel
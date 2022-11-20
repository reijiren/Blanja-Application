const userModel = require('../model/user.model');
const {successWithToken ,failed, success}= require('../helper/response');
const bcrypt= require('bcrypt');
const jwtToken = require('../helper/generateJWT');

const userController = {
  // method
  list: (req, res) => {
    userModel
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
    userModel
      .selectDetail(id)
      .then((result) => {
        success(res, result, 'success','by id user success')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','by id user failed')
      })
  },
   listSeller: (req, res) => {
        userModel.selectSeller()
        .then((result) => {
            success(res, result.rows, 'success', 'get all workers success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'failed to get all workers');
        })
    },
   detailSeller: (req, res) => {
        const id = req.params.id;

        userModel.selectSellerId(id)
        .then((result) => {
            success(res, result.rows, 'success', `get detail worker success`);
        })
        .catch((err) => {
            failed(res, err.message, 'failed', `failed to get worker detail`);
        })
    },

  // update: (req, res) => {
  //   const id = req.params.id
  //   // const image=req.file.filename
  //   // eslint-disable-next-line camelcase
  //   const { name ,password,phone,image,main_address} = req.body
  //   const data={id,name ,password,phone,image,main_address}
  //   userModel
  //     .updateAccount(data)
  //     .then((result) => {
  //       // res.json('Account Updated')
  //       success(res, result, 'success','by id user success')
  //     })
  //     .catch((err) => {
  //       console.log(data)
  //       // res.json(err)
  //       failed(res, err.message,'failed','by id user failed')
  //     })
  // },
  updateUser: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    // const photo = req.file.filename 
    const newPass = body.password ? bcrypt.hashSync(body.password, 10) : null;

    userModel.updateSeller(id, body, newPass)
    .then((result) => {
        success(res, result.rowCount, "success", "update user success");
    })
    .catch((err) => {
        failed(res, err.message, "failed", "failed to update user");
    });
},
  updatePhoto: async(req, res) => {
        const id = req.params.id;
        const image  = req.file.filename;

        await userModel.updatePhoto(id, image)
        .then((result) => {
            success(res, result.rowCount, "success", "update photo success");
        })
        .catch((err) => {
            failed(res, err.message, "failed", "failed to update photo");
        });
    },

  destroy: (req, res) => {
    userModel
      .delete(req.params.id)
      .then((result) => {
        res.json('Account Deleted')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  register:(req, res)=>{
    try{
    const{name,email, password,user_type,store_desc}= req.body;
    const image="abc"
    bcrypt.hash(password,10,(err,hash)=>{
        if (err) {
            failed(res,err.message, 'failed','fail hash password')
          }
          const data={
            name,
            email,
            password: hash,
            user_type,
            image ,
            store_desc,
          }
          userModel
          .register(data).then((result)=>{
            success(res, result, 'success','register success')
            // console.log(data)
          }).catch((err)=>{
            failed(res, err.message,'failed','register fail')
            console.log(data)
          })

        })
    
    }catch(err){
        failed(res, err.message,'failed','internal server error')
        }
},
login: async (req, res) => {
  const {email, password} = req.body;
  userModel.checkUEmail(email).then((result) => {
      // console.log(res.rows[0]);
      const user = result.rows[0];
      if(result.rowCount > 0) {
          bcrypt.compare(password, result.rows[0].password).then(async (result) => {
              if(result) {
                  const token = await jwtToken({
                    email: user.email,
                      // level: user.level
                  })
                  // console.log(token);
                  // delete
                  successWithToken(res, {token, data:user}, "success", "login success");
              } else {
                  // ketika password salah
                  failed(res, null, 'failed', 'name or password is wrong');
              }
          })
      } else {
          //ketika name salah
          failed(res, null, 'failed', 'name wrong');
      }
  }).catch((err) => {
      failed(res, err, 'failed', 'internal server error');
  })
}
}

module.exports = userController

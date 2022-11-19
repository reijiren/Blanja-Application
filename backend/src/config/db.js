// koneksi ke psql

// deklare library
const pg = require('pg')
const{DB_HOSTNAME,DB_USERNAME,DB_PASSWORD,DB_PORT,DB_DATABASE}=require('../helper/env')
const db = new pg.Pool({
  host: DB_HOSTNAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT
})

// cek koneksi
db.connect((err) => {
  if (err) {
    console.log(err)
  }else{
    console.log('database Connected')
  }
})

module.exports = db

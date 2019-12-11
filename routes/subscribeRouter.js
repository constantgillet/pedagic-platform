const express = require('express')
const router = express.Router()

const mysqlConf = require('../config').mysql_pool;

/* GET home page. */
router.get('/', (req, res) => {
  res.render('subscribe')
})

router.post('/', (req, res) => {

  let email = req.body.email
  if(email.length == 0) {
    res.render('subscribe', { message: 'email trop court' })
  }
  else {
    res.render('subscribe', { message: 'email posté' })
  }
  
})

module.exports = router

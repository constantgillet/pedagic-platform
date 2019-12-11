const express = require('express')
const router = express.Router()

const mysqlConf = require('../config').mysql_pool;

/* GET home page. */
router.get('/', (req, res) => {
  res.render('subscribe')
})

router.post('/', (req, res) => {
  
  if(typeof(req.body.name) != 'undefined' &&
  typeof(req.body.firstName) != 'undefined' &&
  typeof(req.body.email) != 'undefined' &&
  typeof(req.body.userType) != 'undefined' &&
  typeof(req.body.gender) != 'undefined' &&
  typeof(req.body.password) != 'undefined' &&
  typeof(req.body.passwordConfirmation) != 'undefined'
  ) {
    
    let name = req.body.name,
          firstName = req.body.firstName,
          email = req.body.email,
          userType = req.body.userType,
          gender = req.body.gender,
          password = req.body.password,
          passwordConfirmation = req.body.passwordConfirmation

    //Controlling length of the name and firstname
    if(name.length < 25 && name.length != 0 && firstName.length < 25 && firstName.length != 0) {
      res.render('subscribe', { alertMessage: 'email posté' })

      
      //Controlling email
      
    }
    else {
      res.render('subscribe', { alertMessage: 'Votre nom ou prénom est trop long ou trop court' })
    }
    
  }
  else {
    res.render('subscribe', { alertMessage: 'email trop court' })
  }
})

module.exports = router

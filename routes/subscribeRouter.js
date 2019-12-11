const express = require('express')
const router = express.Router()
const sha1 = require('sha1')
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

    //Controling length of the name and firstname
    if(name.length < 25 && name.length != 0 && firstName.length < 25 && firstName.length != 0) {
      
      //Controling if i's an email
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { 

        //Controling gender and usertype
        if((gender == 'male' || gender == 'female') && (userType == 'teacher' || userType == 'student')) {

          //Controlling password length
          if(password.length > 5) {

            //Hash passwords with Sha1
            sha1(password)
            sha1(passwordConfirmation)

            //We control if password match
            if(password === passwordConfirmation) {
              res.render('subscribe', { alertMessage: 'Votre compte a été créé.'})
            }
            else {
              res.render('subscribe', { alertMessage: 'Les mots de passe ne correspondent pas.'})
            }
          }
          else {
            res.render('subscribe', { alertMessage: 'Votre mot de passe est trop court.'})
          }
        }
        else {
          res.render('subscribe', { alertMessage: 'Erreur de sexe.'})
        }
      }
      else {
        res.render('subscribe', { alertMessage: 'Votre email est invalide.'})
      }      
    }
    else {
      res.render('subscribe', { alertMessage: 'Votre nom ou prénom est trop long ou trop court.' })
    } 
  }
  else {
    res.render('subscribe', { alertMessage: 'email trop court' })
  }
})

module.exports = router

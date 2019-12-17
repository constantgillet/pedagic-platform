const express = require('express')
const router = express.Router()
const sha1 = require('sha1')

//We connect to the database
const db = require('../dbConnect')

/* GET home page. */
router.get('/', (req, res) => {

    //if cookies of connection exists
    if(req.cookies.email != 'undefinded' && req.cookies.password != 'undefinded') {

        const sql = `SELECT userId FROM users WHERE userEmail = '${ req.cookies.email }' AND userPassword = '${ req.cookies.password }'`
        
        //Check if the user exists in the database 
        db.query(sql, (err, result) => {
            if (err) throw err

            //If the user exists
            if(result.length != 0) {

                req.session.loggedIn = true
                req.session.userId = JSON.stringify(result[0].userId)
                //We redirect to index
                res.redirect('/')
            }
            else {
                res.render('login', { alertMessage: 'Vos cookies de connexion sont invalides.'})
            }
        })
    }
    else {
       res.render('login') 
    }
})

//If the client completed the form
router.post('/', (req, res) => {
    if(typeof(req.body.email) != 'undefined' && typeof(req.body.password) != 'undefined') {
        
        const email = req.body.email
        let password = req.body.password

        //hash the password
        password = sha1(password)

        const sql = `SELECT userId FROM users WHERE userEmail = '${ email }' AND userPassword = '${ password }'`
              
        //Check if the user exists in the database 
        db.query(sql, (err, result) => {
            if (err) throw err

            //If the user exists
            if(result.length != 0) {

                //Set cookies
                res.cookie('email', email)
                res.cookie('password', password)

                req.session.loggedIn = true
                req.session.userId = JSON.stringify(result[0].userId)
                //We redirect to index
                res.redirect('/')
            }
            else {
                res.render('login', { alertMessage: 'Email ou mot de passe invalide.'})
            }
        })
    }
    else {
        res.render('login', { alertMessage: 'Merci de tout compléter.'})
    }
})

module.exports = router

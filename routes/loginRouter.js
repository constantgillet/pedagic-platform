const express = require('express')
const router = express.Router()
const sha1 = require('sha1')
//We connect to the database
const db = require('../dbConnect')

/* GET home page. */
router.get('/', (req, res) => {
    res.render('login')
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

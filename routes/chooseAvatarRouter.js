const express = require('express')
const router = express.Router()
//We connect to the database
const db = require('../dbConnect')

/* GET  page. */
router.get('/', (req, res) => {
    if(typeof(req.session.loggedIn) != 'undefined') {
        
        if(req.session.loggedIn) {
            res.render('chooseAvatar')
            console.log(req.session.loggedIn)  
        }
        else {
            console.log(req.session.loggedIn)
            res.redirect('login')
        }
    }
    else {
        res.redirect('login')
    }
})

//If the client completed the form
router.post('/', (req, res) => {
    if(typeof(req.body.gender) != 'undefined') {
        if(req.body.gender == 'male' || req.body.gender == 'female') {
            
            const sql = `INSERT INTO avatars (gender) VALUES ('${ req.body.gender }')`
            
            //We put into the database
        }
    }
})

module.exports = router
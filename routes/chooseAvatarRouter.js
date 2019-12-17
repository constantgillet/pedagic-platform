const express = require('express')
const router = express.Router()
//We connect to the database
const db = require('../dbConnect')

/* GET  page. */
router.get('/', (req, res) => {
    if(typeof(req.session.loggedIn) != 'undefined') {
        
        if(req.session.loggedIn) {

            //We check the user has already registrer an avatar
            const sql = `SELECT avatarOwnerId FROM avatars WHERE avatarOwnerId = '${ req.session.userId }'`
              
            //Selecting data
            db.query(sql, (err, result) => {
                if (err) throw err

                //If user has not already an avatar
                if(result.length == 0) {
                    res.render('chooseAvatar')
                }
                else {
                    res.redirect('/')
                }
            })
        }
        else {
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
            
            const sql = `INSERT INTO avatars (avatarOwnerId, avatarGender) VALUES ('${ req.session.userId }', '${ req.body.gender }')`
            
            //Insering datas
            db.query(sql, (err, result) => {
                if (err) throw err
                console.log('Avatar has been added into the database')
                res.redirect('/')
            })

        }
    }
})

module.exports = router
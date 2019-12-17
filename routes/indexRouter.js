const express = require('express')
const router = express.Router()

/* GET Index page. */
router.get('/', (req, res) => {
    
    //We check if the session exist else we redirect if 
    if(typeof(req.session.loggedIn) != 'undefined') {
        
        if(req.session.loggedIn) {

           res.render('index')
        }
        else {
            res.redirect('login')
        }
    }
    else {
        res.redirect('login')
    }
})


module.exports = router
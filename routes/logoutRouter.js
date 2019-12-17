const express = require('express')
const router = express.Router()

/* GET logout page. */
router.get('/', (req, res) => {

    req.session.loggedIn = false

    //delete userId variable
    delete req.session.userId

    //delete cookies
    res.clearCookie('email')
    res.clearCookie('password')

    //redirect to login
    res.redirect('/login')
})

module.exports = router
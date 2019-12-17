const express = require('express')
const router = express.Router()
//We connect to the database
const db = require('../dbConnect')

/* GET plays page. */
router.get('/', (req, res) => {
    res.render('play')
})

module.exports = router
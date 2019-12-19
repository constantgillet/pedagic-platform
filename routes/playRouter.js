const express = require('express')
const router = express.Router()
//We connect to the database
const db = require('../dbConnect')

/* GET plays page. */
router.get('/', (req, res) => {

    //We check if the session exist else we redirect if 
    if(typeof(req.session.loggedIn) != 'undefined') {
        
        if(req.session.loggedIn) {

           
            //Control if there is already an user registrer with the email
            const sql = `SELECT gameUserId, gameIndex, currentGameScore FROM game WHERE gameUserId = '${ req.session.userId }'`
            
            //Selecting data
            db.query(sql, (err, result) => {
                if (err) throw err
                
                //If the user exists in games
                if(result.length != 0) {
                    
                    let gameIndex = parseInt(JSON.stringify(result[0].gameIndex))
                    let currentGameScore = JSON.stringify(result[0].currentGameScore)

                    

                    switch (gameIndex) {
                        case 0:
                            console.log('okey')
                            res.render('play', { 
                                gameType: 'punchedText', 
                                levelNumber: '1', 
                                gameLink: '/scripts/punchedText.js',
                                cssLink: '/styles/punchedText.css'
                            })

                            break
                    
                        default:
                            break
                    }

                }
                else {
                    const sql = `INSERT INTO game (gameUserId, gameIndex, currentGameScore) VALUES ('${ req.session.userId }', '0', '0')`
      
                    //Insering datas
                    db.query(sql, (err, result) => {
                        if (err) throw err
                        
                        
                    })
                }
                
            })
        }
        else {
            console.log('pas connecté')
            res.redirect('login')
        }
    }
    else {
        res.redirect('login')
    }

    
})

module.exports = router
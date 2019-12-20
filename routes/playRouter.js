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

                    req.session.currentGameindex = parseInt(JSON.stringify(result[0].gameIndex))

                    switch (gameIndex) {
                        case 0:

                            res.render('play', { 
                                question: '1', 
                                gameType: 'punchedText', 
                                levelNumber: '1', 
                                gameLink: '/scripts/punchedText.js',
                                cssLink: '/styles/punchedText.css'
                            })

                            break

                        case 1:

                            res.render('play', { 
                                question: '2',
                                gameType: 'timeline', 
                                levelNumber: '1', 
                                gameLink: '/scripts/timeline.js',
                                cssLink: '/styles/timeline.css'
                            })
        
                            break
                        case 2:

                            res.render('play', { 
                                question: '3',
                                gameType: 'qcm', 
                                levelNumber: '1', 
                                gameLink: '/scripts/qcm.js',
                                cssLink: '/styles/qcm.css'
                            })
            
                            break
                        case 3:

                            res.render('play', { 
                                question: '4',
                                gameType: 'pixelated', 
                                levelNumber: '1', 
                                gameLink: '/scripts/pixelated.js',
                                cssLink: '/styles/pixelated.css'
                            })
                
                            break
                        
                        case 4:

                            res.render('play', { 
                                question: '5', 
                                gameType: 'punchedText', 
                                levelNumber: '2', 
                                gameLink: '/scripts/punchedText.js',
                                cssLink: '/styles/punchedText.css'
                            })
                    
                            break

                        case 5:

                            res.render('play', { 
                                question: '6', 
                                gameType: 'multipleQuestion', 
                                levelNumber: '1', 
                                gameLink: '/scripts/multipleQuestion.js',
                                cssLink: '/styles/multipleQuestion.css'
                            })
                        
                            break

                        case 6:

                            res.render('play', { 
                                question: '7', 
                                gameType: 'wordTable', 
                                levelNumber: '1', 
                                gameLink: '/scripts/wordTable.js',
                                cssLink: '/styles/wordTable.css'
                            })
                            
                            break

                        case 7:

                            res.render('endGameScreen')
                                
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
                        
                        res.render('play', { 
                            question: '1', 
                            gameType: 'punchedText', 
                            levelNumber: '1', 
                            gameLink: '/scripts/punchedText.js',
                            cssLink: '/styles/punchedText.css'
                        })
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

//If the client complte the form
router.post('/', (req, res) => {

    console.log(req.body.questionNumber)

    const currentQuestion = parseInt(req.body.questionNumber++)

    const sql = `UPDATE game SET gameIndex = '${ currentQuestion }' WHERE gameUserId = '${ req.session.userId }'`

    db.query(sql, (err, result) => {
        if (err) throw err

        if(currentQuestion == 7) {
            res.render('endGameScreen')
        } else {
            res.redirect('play')
        }
        
    })

})

module.exports = router
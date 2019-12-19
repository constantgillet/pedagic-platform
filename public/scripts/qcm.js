<<<<<<< HEAD
const answers =   
=======
const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')

const levelQuestions = [
    //question 1
    [
        1,
        'La séance d\'ouverture des Etats Généraux a lieu à Versailles le ?',
        [
            '1er mai 1789',
            '5 mai 1789',
            '8 mai 1789',
            '17 décembre 2019'
        ]
    ],
    //question 2
    [
        3,
        'Est-ce que Dimitri est le fils de Napoléon ?',
        [
            'Oui',
            '5 mai 1789',
            '8 mai 1789',
            'la réponse D'
        ]
    ]
]

class qcmGame {
    constructor(game, levels, levelToLoad) {
        this.game = game
        this.levels = levels
        this.levelToLoad = levelToLoad
        this.title = this.game.querySelector('.game__zone__title__content')
        this.answers = this.game.querySelectorAll('.answer')
        this.timerText = this.game.querySelector('.game__zone__timer__number')
        this.timeInterval = null
        this.loadLevel()
        this.timeOut()
    }

    loadLevel() {
        //We change the title
        this.title.innerText = this.levels[this.levelToLoad-1][1]

        for (let i = 0; i < this.answers.length; i++) {
            
            this.answers[i].innerText = this.levels[this.levelToLoad-1][2][i]

            this.answers[i].addEventListener('click', () => {
                
                if(i+1 == this.levels[this.levelToLoad-1][0]) {
                    alert('Tu as trouvé la réponse')
                    clearInterval(this.timeInterval)
                }
                else {
                    alert('Faux')
                    clearInterval(this.timeInterval)
                }
            })
        }
    }

    timeOut() {
        let seconds = 10

            this.timeInterval = setInterval(() => {

                seconds --

                //We change the text of the seconds
                this.timerText.innerText = seconds

                if(seconds == 0)
                {
                    alert('Fin du game mon gars')
                    clearInterval(this.timeInterval)
                }
        }, 1000)
    }
}

const qcm = new qcmGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)
>>>>>>> 0c92edc42941180f0d65ab754038d71bd58cf88d

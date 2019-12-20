const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')
const question = script.getAttribute('question')

const levelQuestions = [
    //question 1
    [
        1,
        'De quoi sont composés  les Etats généraux ?',
        [
            'Du clergé, de la noblesse et du tiers États',
            'Des sujets du royaume de France',
            'Des ministres de Louis XVI',
            'Les membres les plus importants du clergé'
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
                    clearInterval(this.timeInterval)
                    this.win()
                }
                else {
                    clearInterval(this.timeInterval)
                    this.win()
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
                    clearInterval(this.timeInterval)
                    this.win()
                }
        }, 1000)
    }

    win() {
        const resultForm = document.createElement('form')
        resultForm.setAttribute('method','post')
        resultForm.setAttribute('action','')

        const inputSuccess = document.createElement('input')
        inputSuccess.setAttribute('type','text')
        inputSuccess.setAttribute('name','success')
        inputSuccess.value = 'true'

        const inputPoints = document.createElement('input')
        inputPoints.setAttribute('type','text')
        inputPoints.setAttribute('name','points')
        inputPoints.value = '10'

        const inputQuestionNumber = document.createElement('input')
        inputQuestionNumber.setAttribute('type','text')
        inputQuestionNumber.setAttribute('name','questionNumber')
        inputQuestionNumber.value = question

        resultForm.appendChild(inputSuccess)
        resultForm.appendChild(inputPoints)
        resultForm.appendChild(inputQuestionNumber)

        this.game.appendChild(resultForm)
        resultForm.submit()        
    }
}

const qcm = new qcmGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)

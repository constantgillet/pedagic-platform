const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')
const question = script.getAttribute('question')

const levelQuestions = [
    //question 1
    [
        [1, 4],
        'Que fait la constitution ??',
        [
            'Elle partage le pouvoir entre le roi et une assemblée élue par le suffrage censitaire',
            'Elle donne le pouvoir absolu au Roi.',
            'Elle permet aux sujets du Royaume de voter au suffrage universel',
            'Elle vend les biens du clergé pour résoudre les problèmes financiers'
        ]
    ],
    //question 2
    [
        [1, 2, 3],
        'Est-ce que Dimitri est le fils de Napoléon ?',
        [
            'Oui',
            '5 mai 1789',
            '8 mai 1789',
            'la réponse D'
        ]
    ]
]

class MultipleQuestionGame {
    constructor(game, levels, levelToLoad) {
        this.game = game
        this.levels = levels
        this.levelToLoad = levelToLoad
        this.title = this.game.querySelector('.game__zone__title__main-title')
        this.answers = this.game.querySelectorAll('.response')
        this.timerText = this.game.querySelector('.game__zone__timer__number')
        this.timeInterval = null
        this.loadLevel()
        this.timeOut()
    }

    loadLevel() {
        //We change the title
        this.title.innerText = this.levels[this.levelToLoad-1][1]

        let answersSelected = []

        for (let i = 0; i < this.answers.length; i++) {
            
            this.answers[i].innerText = this.levels[this.levelToLoad-1][2][i]

            this.answers[i].addEventListener('click', () => {
                
                
                if(answersSelected.includes(i+1)){
                    this.answers[i].classList.remove('response--active')
                   const IndexToDeletePosition = answersSelected.lastIndexOf(i+1)
                   answersSelected.splice(IndexToDeletePosition, 1)
                }
                else {
                    this.answers[i].classList.add('response--active')
                    answersSelected.push(i+1)
                }
                

                console.log(answersSelected)
                
                if(answersSelected.length >= this.levels[this.levelToLoad-1][0].length) {

                    let goodAnswers = 0

                    for (let n = 0; n < this.levels[this.levelToLoad-1][0].length; n++) {
                        
                        if(answersSelected.includes(this.levels[this.levelToLoad-1][0][n])) {
                            
                            goodAnswers++
                            
                            this.win()

                            console.log(goodAnswers, this.levels[this.levelToLoad-1][0].length)
                            if(goodAnswers.length == this.levels[this.levelToLoad-1][0].length) {
                                
                            }
                        }
                    } 
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
                    this.win()
                    clearInterval(this.timeInterval)
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

const multipleQuestion = new MultipleQuestionGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)

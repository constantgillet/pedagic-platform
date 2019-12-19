const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')

const levelQuestions = [
    //question 1
    [
        [1, 2],
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
                           
                        }
                    } 
                    console.log(goodAnswers)
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

const multipleQuestion = new MultipleQuestionGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)

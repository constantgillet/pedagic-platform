const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')
const question = script.getAttribute('question')

const levelQuestions = [
    //question 1
    [
        '- Les personnages importants de la Révolution française  -',
        ['images/louisXVI.jpg', 'Louis XVI'],
        ['images/robespierre-min.jpg', 'Robespierre'],
        ['images/napoleon.jpg', 'Napoléon Bonaparte'],
        ['images/lafayette.png', 'Lafayette'],
        ['images/danton.jpg', 'Danton'],
        ['images/mirabeau.jpg', 'Mirabeau']
    ],
    //question 2
    [
        '- Les personnages importants de la Révolution française 2 -',
        ['../../public/images/robespierre.jpg', 'Thibault 1'],
        ['../../public/images/robespierre.jpg', 'Robespierre 2'],
        ['../../public/images/robespierre.jpg', 'Robespierre 3'],
        ['../../public/images/robespierre.jpg', 'Robespierre 4'],
        ['../../public/images/robespierre.jpg', 'Robespierre 5'],
        ['../../public/images/robespierre.jpg', 'Robespierre 6']
    ]
]

class wordTableGame {
    constructor(game, levels, levelToLoad) {
        this.game = game
        this.levels = levels
        this.levelToLoad = levelToLoad
        this.secondTitle = this.game.querySelector('.game__zone__title__second-title')
        this.propositions = this.game.querySelectorAll('.proposition')
        this.reponseForm = this.game.querySelector('.game__zone__response')
        this.reponseInput = this.reponseForm.querySelector('.game__zone__response__enter')
        this.timerText = this.game.querySelector('.game__zone__timer__number')
        this.timeInterval = null
        this.loadLevel()
        this.timeOut()
    }

    loadLevel() {
        let finded = 0

        //Text of the subtitle
        this.secondTitle.innerText = this.levels[this.levelToLoad - 1][0]

        this.reponseForm.addEventListener('submit', (_event) => {
            _event.preventDefault()

            for (let i = 0; i < this.levels[this.levelToLoad - 1].length - 1; i++) {

                //if the player put a good answer
                if (this.reponseInput.value == this.levels[this.levelToLoad - 1][i + 1][1]) {

                    this.propositions[i].innerText = this.levels[this.levelToLoad - 1][i + 1][1]
                    this.propositions[i].style.color = '#F5F5F5'
                    this.propositions[i].style.background = `url("${this.levels[this.levelToLoad - 1][i + 1][0]}")`
                    finded++

                    if(finded == this.propositions[i].length-1) {
                        this.win()
                    }
                }
            }
        })
    }

    timeOut() {
        let seconds = 60

        this.timeInterval = setInterval(() => {

            seconds--

            //We change the text of the seconds
            this.timerText.innerText = seconds

            if (seconds == 0) {
                
                clearInterval(this.timeInterval)
                this.win()
            }
        }, 1000);

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

const wordTable = new wordTableGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)


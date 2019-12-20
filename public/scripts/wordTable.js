const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')

const levelQuestions = [
    //question 1
    [
        '- Les personnages importants de la Révolution française 2 -',
        ['../../public/images/robespierre.jpg', 'Robespierre 1'],
        ['../../public/images/robespierre.jpg', 'Robespierre 2'],
        ['../../public/images/robespierre.jpg', 'Robespierre 3'],
        ['../../public/images/robespierre.jpg', 'Robespierre 4'],
        ['../../public/images/robespierre.jpg', 'Robespierre 5'],
        ['../../public/images/robespierre.jpg', 'Robespierre 6']
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
                alert('Fin du game mon gars')
                clearInterval(this.timeInterval)
            }
        }, 1000);

    }
}

const wordTable = new wordTableGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)


const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')
const question = script.getAttribute('question')

console.log(question)

const levelQuestions = [
    //question 1
    [
        'Un nouveau régime',
        'Le 5 mai 1789, <div class="game__zone__punchedText__cover">Louis XVI</div> réunit les Etats Généraux du royaume afin de trouver des solutions à la crise que traverse la France. Presque immédiatement, il perd le contrôle des événements. S’engage alors une période de 15 ans durant laquelle la France rompt avec l’Ancien Régime tout en étant confrontée à la guerre et à de nombreux bouleversements.',
        ['Louis XVI', 'Louis XIV', 'Henri IV', 'Napoléon I'],
        0
    ],
    //question 2
    [
        'Le 14 juillet 1789',
        ['Au début du mois de juillet 1789, le peuple de Paris meurt de faim car le prix du pain est extrêmement élevé car le royaume connaît une crise financière importante. Les parisiens décident donc de prendre d’assaut la forteresse de <div class="game__zone__punchedText__cover">la Bastille</div, qui avait été transformée en prison, afin de trouver des armes et de commencer la révolte. Le château des Tuileries a lui aussi été pillé de ses armes et près de 32000 fusils ont été récupérés.'],
        ['Vincennes', 'Versailles', 'La Bastille', 'Saint Michel'],
        2
    ]
]

class punchedTextGame {
    constructor(game, levels, levelToLoad) {
        this.game = game
        this.levels = levels
        this.levelToLoad = levelToLoad
        this.title = this.game.querySelector('.game__zone__title__main-title')
        this.textZone = this.game.querySelector('.game__zone__punchedText__text')
        this.reponsesZone = this.game.querySelector('.game__zone__punchedText__responses')
        this.coveredtext = null
        this.timerText = this.game.querySelector('.game__zone__timer__number')
        this.timeInterval = null
        this.playing = true
        this.loadLevel()
        this.timeOut()
        
    }

    loadLevel() {

        //Text of the title
        this.title.innerText = this.levels[this.levelToLoad-1][0]

        //Changing text
        this.textZone.innerHTML = this.levels[this.levelToLoad-1][1]

        this.coveredtext = this.game.querySelector('.game__zone__punchedText__cover')

        let reponsesButtons = []

        for (let i = 0; i < this.levels[this.levelToLoad-1].length; i++) {

            reponsesButtons[i] = document.createElement('div')
            reponsesButtons[i].classList.add('game__zone__punchedText__response')
            reponsesButtons[i].innerText = this.levels[this.levelToLoad-1][2][i]
            this.reponsesZone.appendChild(reponsesButtons[i])

            reponsesButtons[i].addEventListener('click', () => {

               if(this.playing) {
                    if(i == this.levels[this.levelToLoad-1][3]) {
                        
                        this.playing = false
                        this.coveredtext.style.color = '#4D4D4D'
                        clearInterval(this.timeInterval)

                        const endTimout = window.setTimeout(() => {

                            this.win()
                        }, 2000)
                    }
                    else {
                        
                        this.playing = false
                        this.coveredtext.style.color = 'red'
                        clearInterval(this.timeInterval)

                        const endTimout = window.setTimeout(() => {
                            this.win()

                        }, 2000)
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

const punchedText = new punchedTextGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)


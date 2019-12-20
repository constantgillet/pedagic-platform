const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')
const question = script.getAttribute('question')

const levelQuestions = [
    //question 1
    ['../images/serment-du-jeu-de-paume.png', '../images/serment-du-jeu-de-paume-blur.png', 'Quel est le nom de ce tableau ?', 'Le serment du jeu de paume'], 
    //question 2
    ['../images/serment-du-jeu-de-paume.png', '../images/serment-du-jeu-de-paume-blur.png', 'Quel est le nom de ce tableau rouilla ?', 'reponse']
]

class pixelatedGame {
    constructor(game, levels, levelToCharge) {
        this.game = game
        this.levels = levels
        this.levelToCharge = levelToCharge
        this.title = this.game.querySelector('.game__zone__title__main-title')
        this.image = this.game.querySelector('.game__zone__blur__img')
        this.imageBlur = this.game.querySelector('.game__zone__blur__img__blur')
        this.form = this.game.querySelector('.game__zone__blur__form')
        this.input = this.game.querySelector('.game__zone__blur__response')
        this.timerText = this.game.querySelector('.game__zone__timer__number')
        this.timeInterval = null
        this.loadLevel()
        this.timeOut()
    }

    loadLevel() {
        //Text of the title
        this.title.innerText = this.levels[this.levelToCharge-1][2]

        //Image not blured
        this.image.src = this.levels[this.levelToCharge-1][0]
        
        //image blured
        this.imageBlur.src = this.levels[this.levelToCharge-1][1]

        this.form.addEventListener('submit', (_event) => {
            _event.preventDefault()
            
            if(this.input.value == this.levels[this.levelToCharge-1][3]) {
                this.win()
                clearInterval(this.timeInterval)
            }
            else {
                console.log('mauvaise réponse')
            }
        })
    }

    timeOut() {
        let seconds = 15
        let opacity = 1

            this.timeInterval = setInterval(() => {

                seconds --
                opacity = opacity - 0.05

                //We change the opacity of the image
                this.imageBlur.style.opacity = opacity

                //We change the text of the seconds
                this.timerText.innerText = seconds

                if(seconds == 0)
                {
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

const pixelated = new pixelatedGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)

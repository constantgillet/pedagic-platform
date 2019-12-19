const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')

const levelQuestions = [
    //question 1
    [
        'Un nouveau régime',
        'Le 5 mai 1789, <div class="game__zone__punchedText__cover">Louis XVI</div> réunit les Etats Généraux du royaume afin de trouver des solutions à la crise que traverse la France. Presque immédiatement, il perd le contrôle des événements. S’engage alors une période de 15 ans durant laquelle la France rompt avec l’Ancien Régime tout en étant confrontée à la guerre et à de nombreux bouleversements.',
        ['Louis XVI', 'Louis XIV', 'Henri IV', 'Napoléon I'],
        0
    ],
    //question 1
    [
        'Titre',
        ['Le 5 mai 1789, <div class="game__zone__punchedText__cover">Louis XVI</div> réunit les Etats Généraux du royaume afin de trouver des solutions à la crise que traverse la France. Presque immédiatement, il perd le contrôle des événements. S’engage alors une période de 15 ans durant laquelle la France rompt avec l’Ancien Régime tout en étant confrontée à la guerre et à de nombreux bouleversements.'],
        ['Louis XVI', 'Thibault Barthes', 'Henri IV', 'Napoléon I'],
        1
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
                
                if(i == this.levels[this.levelToLoad-1][3]) {
                    alert('Vous avez gagné')
                    this.coveredtext.style.color = '#4D4D4D'
                    clearInterval(this.timeInterval)
                }
                else {
                    alert('Perdu')
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
        }, 1000);

    }
}

const punchedText = new punchedTextGame(document.querySelector('.game__zone'), levelQuestions, levelAsked)

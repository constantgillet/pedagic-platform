const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')

const levelQuestions = [
    //question 1
    [
        ['Mai 1789', 'Réunion États Généraux', 5],
        ['20 juin 1789', 'Serment du jeu de paume', 2],
        ['14 juillet 1789', 'Prise de la Bastille', 4],
        ['4 août 1789', 'Abolition des privilèges', 3],
        ['26 août 1789', 'Adoption de DDHC', 0],
        ['3 septembre 1791', 'Première constitution en France', 1]
    ],
    //question 2
    [
        ['20 avril 1792', 'Guerre entre la France et l’autriche'],
        ['22 septembre 1792', 'Proclamation de la république'],
        ['21 janvier 1793', 'Exécution de Louis XVI'],
        ['Septembre 1793 - 1794', 'Mise en place de la Terreur'],
        ['28 juillet 1794', 'Exécution de Robespierre'],
        ['9 novembre 1799', 'Coup d’état de Bonaparte']
    ]
]

class timeLineGame {
    
    constructor(game, levels, levelToCharge) {
        this.game = game
        this.levels = levels
        this.levelToCharge = levelToCharge
        this.halfCirclePart = this.game.querySelector('.game-timeline__arrow__half-circles-part')
        this.arrowDatesPart = this.game.querySelector('.game-timeline__arrow__dates-part')
        this.answerZones = this.game.querySelector('.game-timeline__arrow__answer-zones')
        this.answerList = this.game.querySelector('.game-timeline__answers-list')
        this.selecting = false
        this.selected

        this.loadLevel()
    }

    loadLevel() {

        let halfCircles = []
        let dates = []
        let answerZone = []
        let answers = []
        let responses = []

        for (let i = 0; i < this.levels[this.levelToCharge-1].length; i++) {

            halfCircles[i] = document.createElement('div')
            halfCircles[i].classList.add('game-timeline__arrow__half-circles-part__circle')
            this.halfCirclePart.appendChild(halfCircles[i])
        
            dates[i] = document.createElement('div')
            dates[i].classList.add('game-timeline__arrow__dates-part__date')
            dates[i].innerText = this.levels[this.levelToCharge-1][i][0]
            this.arrowDatesPart.appendChild(dates[i])

            answerZone[i] = document.createElement('div')
            answerZone[i].classList.add('game-timeline__arrow__answer-zones__answers')
            this.answerZones.appendChild(answerZone[i])

            answers[i] = document.createElement('div')
            answers[i].classList.add('game-timeline__answers-list__answer')
            this.answerList.appendChild(answers[i])

            answers[i].addEventListener('click', () => {
                console.log(answers[i].innerText)

                
                if(this.selecting) {

                    for (let n = 0; n < answers.length; n++) {
                       
                        answers[n].classList.remove('game-timeline__answers-list__answer--selected')
                        answers[n].classList.add('game-timeline__answers-list__answer')
                    }

                }
                answers[i].classList.remove('game-timeline__answers-list__answer')
                answers[i].classList.add('game-timeline__answers-list__answer--selected')
                this.selected = i
                this.selecting = true
            })

            answerZone[i].addEventListener('click', () => {

                if (this.selecting == true) {
                    console.log(this.selected)
                    
                    for (let n = 0; n < this.levels[this.levelToCharge-1].length; n++) {
                      
                        if (this.levels[this.levelToCharge-1][])
                    }
                }
            })
        }
        
        for (let i = 0; i < this.levels[this.levelToCharge-1].length; i++) {

            for (let n = 0; n < this.levels[this.levelToCharge-1].length; n++) {

                if(i == this.levels[this.levelToCharge-1][n][2]) {

                    answers[i].innerText = this.levels[this.levelToCharge-1][n][1]
                    break
                }
            }
        }
    }
}

const timeLine = new timeLineGame(document.querySelector('.game-timeline'), levelQuestions, 1)
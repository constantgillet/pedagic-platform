const script = document.getElementById('game')
const levelAsked = script.getAttribute('level')

const levelQuestions = [
    //question 1
    [
        ['Mai 1789', 'Réunion États Généraux'],
        ['20 juin 1789', 'Serment du jeu de paume'],
        ['14 juillet 1789', 'Prise de la Bastille'],
        ['4 août 1789', 'Abolition des privilèges'],
        ['26 août 1789', 'Adoption de DDHC'],
        ['3 septembre 1791', 'Première constitution en France']
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
        this.loadLevel()
    }

    loadLevel() {

        let halfCircles = []

        for (let i = 0; i < this.levels[this.levelToCharge-1].length; i++) {
            //console.log(this.halfCirclePart)        
            halfCircles[i] = document.createElement('div')
            halfCircles[i].classList.add('game-timeline__arrow__half-circles-part__circle')
            this.halfCirclePart.appendChild(halfCircles[i])
        }

        let dates = []

        for (let i = 0; i < this.levels[this.levelToCharge-1].length; i++) {
            //console.log(this.halfCirclePart)        
            dates[i] = document.createElement('div')
            dates[i].classList.add('game-timeline__arrow__dates-part__date')
            dates[i].innerText = this.levels[this.levelToCharge-1][i][0]
            this.arrowDatesPart.appendChild(dates[i])
        }
    }
}

const timeLine = new timeLineGame(document.querySelector('.game-timeline'), levelQuestions, 1)
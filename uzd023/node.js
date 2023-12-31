const arr = []; // shortcutai
const obj = {}; // shortcutai

const arr2 = new Array(); // longcuts
const obj2 = new Object({food: 5}); // longcuts
const map = new Map();

class Racoon {

    // constructor
    constructor(racoonName, spalva = 'grey') {
        console.log('New racoon is born');
        this.food = 5;
        this.name = racoonName;
        this.color = spalva;
    }

    // eat method
    eat () {
        console.log(this.name + ' ' + this.color + ' is eating');
        this.food--;
        console.log('I have ' + this.food + ' food left');
    }

}

const racoon = new Racoon('Bobby', 'brown');
const racoon2 = new Racoon('Robby');

console.log(racoon.food);

racoon.eat();
racoon.eat();
racoon2.eat();
racoon.eat();

console.log(racoon, racoon2);


// ---------------------------Circle----------------------

class Circle {

    static circles = [];
    // static effectInterval;
    // static circlesPlace;
    // static buttonsPlace;

    static init(lele, lala, count = 5) {
        this.kuka = lele;
        this.bukas1 = lala;
        for (let i = 0; i < count; i++) {
            new this(lele);
        }
        this.createButton(bukas1, 'Start changing colors', this.effectChangeColors.bind(this));
        this.createButton(bukas1, 'Move left', this.effectMoveLeft.bind(this))
        this.createButton(bukas1, 'Move right', this.effectMoveRight.bind(this))
        this.createButton(bukas1, 'Stop', _ => clearInterval(this.effectInterval));
    }

    static createButton(buttonsPlace, text, action) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', action);
        buttonsPlace.appendChild(button);
    }

    static effectChangeColors() {
        clearInterval(this.effectInterval);
        this.effectInterval = setInterval(_ => {
            this.circles.forEach(circle => circle.changeColor());
        }, 400)
    }

    static effectMoveLeft() {
        clearInterval(this.effectInterval)
        this.effectInterval = setInterval(_ => {
            this.circles.push(this.circles.shift());
            this.circles.forEach(circle => this.kuka.appendChild(circle.circleDiv));
        }, 500);
    }
    static effectMoveRight() {
        clearInterval(this.effectInterval)
        this.effectInterval = setInterval(_ => {
            this.circles.unshift(this.circles.pop());
            this.circles.forEach(circle => this.kuka.appendChild(circle.circleDiv))
        }, 500);
    }

    constructor(place) {
        this.circleDiv = document.createElement('div');
        this.circleDiv.style.width = '100px'
        this.circleDiv.style.height = '100px'
        this.circleDiv.style.borderRadius = '50%'
        this.circleDiv.style.backgroundColor = this.randomColor();
        this.circleDiv.style.margin = '10px'
        this.circleDiv.style.display = 'inline-block'
        place.appendChild(this.circleDiv);
        this.constructor.circles.push(this);
    }
    randomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
        return '#' + randomColor;
    }

    changeColor() {
        this.circleDiv.style.backgroundColor = this.randomColor();
    }
}

const kuka = document.querySelector('#circles');
const bukas1 = document.querySelector('#buttons');

class Colors4 extends Circle {
    static colors = ['crimson', 'darkblue', 'darkgreen', 'darkorange'];

    constructor(place) {
        super(place); // call parent constructor
        this.circleDiv.textContent = 'bla';
        this.circleDiv.style.textAlign = 'center';
    }

    // randomColor() {
    //     const randomIndex = Math.floor(Math.random() * this.constructor.colors.length)
    //     return this.constructor.colors[randomIndex];
    // }
}
// Circle.init(circlesPlace, buttonsPlace, 7)
Circle.init(kuka, bukas1, rand(10, 20));

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1993)
console.log(age1);

// Function expression
const calcAge2 = function (birthYear2) {
    return 2037 - birthYear2
} 
const age2 = calcAge2(1993);
console.log(age1, age2);

const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const countryLT = describeCountry(`Lietuva`, 2.5, `Vilnius`);
const countryPL = describeCountry(`Lenkija`, 33, `Warsaw`);
const countryENG = describeCountry(`Anglija`, 80, `London`);

console.log(`${countryLT}, 
${countryPL}, 
${countryENG}`);

function percentageOfWorld1(population) {
    return population/7900*100
}
const LT = percentageOfWorld1(3);
const PL = percentageOfWorld1(33);
const CHN = percentageOfWorld1(1441);
console.log(LT, PL, CHN);

const percentageOfWorld2 = function (population) {
    return population/7900*100
}

console.log(percentageOfWorld2(3), percentageOfWorld2(33), percentageOfWorld2(1));

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, 'Aurimas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    return retirement > 0 ? retirement : -1;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, 'Aurimas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreDolphins2 = calcAverage(85, 54, 41);

const scoreKoalas = calcAverage(65, 54, 49);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2* avgKoalas) {
        console.log(`Dolphins win the trophy ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log(`No team wins...`);
    }
}

const checkWinner2 = (avgDolphins, avgKoalas) => avgDolphins >= avgKoalas * 2 ? `${avgDolphins} Dolphins wins` : avgKoalas >= avgDolphins * 2 ? `${avgKoalas} Koalas wins` : `no team wins`;
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);
console.log(checkWinner2(scoreDolphins, scoreKoalas));
console.log(checkWinner2(scoreDolphins2, scoreKoalas2));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']
const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length-1])
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

const newLength2 = friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
// const shifted = friends.shift();
console.log(friends);
// console.log(shifted);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23)); // stringas neveikia nes strict comparison ===
if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

function calcTip (bill) {
    // let tip;
    // if (bill >= 50 && bill <= 300) {
    //     tip = bill * 0.15
    // } else {
    //     tip = bill * 0.20
    // }
    // return tip;
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]
console.log(tips);
const totals = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];
console.log(totals);

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// console.log(jonas.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenger
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    
    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));
// Challenger
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
     }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
     }
}

console.log(mark.calcBMI() > john.calcBMI() 
?
`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})` 
:
`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})` );

for (let i = 1; i <= 10; i++) {
console.log(`Lifting weights repetition ${i}`)
}
*/

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i]
    types.push(typeof jonasArray[i])
} 
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}
console.log(ages);

// continue and break
console.log('-----------ONLY STRINGS-------------------');
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('-----------BREAK WITH NMBER-------------------');
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}


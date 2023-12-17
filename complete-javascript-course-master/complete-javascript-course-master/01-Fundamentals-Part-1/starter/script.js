/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Metilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM'
let $function = 27

let person = 'jonas'

let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let country = 'Lithuania';
let continent = 'Europe';
let population = 2700000
console.log(country, continent, population);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job

var job = 'programmer'
job = 'teacher'

lastName = 'Scmedtmann'
console.log(lastName);

// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

const isIsland = false;
const language = 'lietuviu'
console.log(isIsland, language);

const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIMark2 = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / heightJohn ** 2;
const BMIJohn2 = massJohn / (heightJohn * heightJohn)

let markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas); 

const jonasNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multile
lines`);

const age = 15;

if (age >= 18) {
    console.log(`Yes, ${age} is old enough to drive👌`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Esate per jaunas. Po ${yearsLeft} metų jau galėsite vairuoti 👍 `);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}

const age = '18';
if (age === 18) console.log(`You just became an adult :D (strict)`);

if (age == 18) console.log(`You just became an adult :D (loose)`);

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { 
    console.log(`Cool 23 is an amazing number!`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number!`);
} else if (favourite === 9) {66
    console.log(`9 is a cool number too`);
} else {
    console.log(`Number is not 23 or 7`);
}

if (favourite !== 23) console.log(`Why not 23?`);

const hasDriversLicense = true; // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}
*/

const dolphins1 = 103;
const dolphins2 = 108;
const dolphins3 = 89;
const koalas1 = 99;
const koalas2 = 91;
const koalas3 = 110; 
const scoreDolphins = (dolphins1 + dolphins2 + dolphins3) / 3
const scoreKoalas = (koalas1 + koalas2 + koalas3) / 3

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy`);
} else if ((scoreDolphins === scoreKoalas) && scoreDolphins >= 100)  {
    console.log(`Both win the trhopy`);
} else  if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas won the trophy`);
} else {
    console.log(`No one won the trophy`);
}


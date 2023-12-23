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
*/

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

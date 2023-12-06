console.log('All about arrays ----------------------------------------------------');

const animals = [
    'Lion',
    'Racoon',
    'Monkey',
    'Cat',
    'Dog',
    'Bird',
    'Fish',
    'Turtle',
    'Snake'
];

animals[4] = 'Frog';

animals.push('Elephant');
animals.push('Horse', 'Cow', 'Pig');
animals.unshift('Tiger', 'Bear'); // reindex

animals.pop();
animals.pop();
animals.pop();

animals.shift(); // reindex
animals.shift(); // reindex

let animalsLine = 'Animals: ';

for (let i = 0; i < animals.length; i++) {
    // console.log(animals[i]);
    animalsLine += animals[i] + ' +';
}

const animalsLine2 = 'Animals: ' + animals.join(' + ');

console.log(animalsLine);
console.log(animalsLine2);


for (let animal of animals) {
    console.log(animal);
}

// const printRed = animals => {
//     console.log('%c ${animals}', 'color: crimson')
// }

// animals.forEach(printRed);

animals.forEach(animal => console.log(animal));

console.log(animals, animals.length);

// const arr123 = [1, 2, -3, 1, -1];

// let sum = 0;

// arr123.forEach(num => num > 0 ? sum += num : false); // parametras yra pirmas po funkcijos skliausto. O ternaris yra patikrinimas ar TRUE, jei true tada po klaustuko pirmas atsakymas, jei FALSE tada po dvitasskio tas antras atsakymas. Svarbiausia Ternario esme, kad po dvitaskio turi buti kazkas kas nueis i bedugne.

// let unknownObj = null;

// console.log(unknownObj, typeof unknownObj);

// console.log(sum);

// const farm = [
//     'Cow',
//     'Chicken',
//     'Pig',
//     'Cow',
//     'Chicken',
//     'Cow'
// ]

// let karves = 0;
// let neKarves = 0;

// farm.forEach(kiek => kiek == 'Cow' ? karves += 1 : neKarves += 1);

// console.log(karves, neKarves);

// let A = 5;
// let B = 6;

// A += B; // A = A + B;

// console.log(A);


const superFarm = [
    { animal: 'Agurkinis', weight: 500 },
    { animal: 'Cow', weight: 1000 },
    { animal: 'Chicken', weight: 3 },
    { animal: 'Bebras', weight: 10 },
    { animal: 'Pig', weight: 100 },
    { animal: 'Cow', weight: 400 },
    { weight: 444 },
    { animal: 'Bebras', weight: 10 },
    { animal: 'Chicken', weight: 2 },
    { animal: 'Cow', weight: 600 },
    { animal: 'Agurkinis', weight: 1000 },
    { animal: 0, weight: 1 },
    { animal: '1', weight: 50 },
    { animal: 2, weight: 5 },
    { animal: 4, weight: 1 }
];

// let svoris = 0;

// superFarm.forEach(sveria => sveria.animal === 'Cow' ? svoris += sveria.weight : null); // jeigu parametro vardas yra sveria, tai eina per eilute ir iesko props (property) .animal ir ar jis atitinka 'Cow', tai jei atitinka, tada parametras sveria.weight prisideda ir yra lygu svoriui

// console.log(svoris);


const allAnimalWeight = {};

superFarm.forEach((a) => {
    if (allAnimalWeight[a.animal] === undefined) {
        allAnimalWeight[a.animal] = 0;
    }
    allAnimalWeight[a.animal] += a.weight;
});

console.log(allAnimalWeight);
console.log(superFarm);

const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'pink',
    'orange',
    'purple'
];

// let spalva = 'ne'

// colors.forEach(colorsas => colorsas === 'black' ? spalva = 'yes' : spalva);

// console.log(spalva);

// let isBlack = false;
// colors.forEach(color => color === 'black' ? isBlack = true : false)

// console.log(isBlack);

let isPink = true;
colors.forEach(color => color === 'pink' && (isPink = 'yra'));

// let isPink2 = 'NO';

// colors.forEach(color => {
//     if (color === 'pink') {
//         isPink2 = 'YES';
//     }
// });

console.log(isPink);


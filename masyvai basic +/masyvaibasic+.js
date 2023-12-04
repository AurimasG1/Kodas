console.log('hello');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const pirmasmasyvas = [];

for (let i = 0; i < 30 ; i++) {
    pirmasmasyvas.push(rand(5, 25));
}

console.log(pirmasmasyvas);

let kiekDaugUz10 = 0;
// for (let i = 0; i < 30; i++) {
//     if (pirmasmasyvas[i] > 10) {
//         kiekDaugUz10++
//     }
// }

const skaiciuotuvas = function (parametras) {
    let kiekDaugUz10 = 0;

    parametras.forEach(item => {
        (item > 10) ? kiekDaugUz10++ : null
    });

    return kiekDaugUz10;
}
// pirmasmasyvas.forEach(item => {
//     (item > 10) ? kiekDaugUz10++ : null
// })

console.log(skaiciuotuvas(pirmasmasyvas));
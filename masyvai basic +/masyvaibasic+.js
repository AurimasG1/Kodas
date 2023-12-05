console.log('hello');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let sugeneruotasmasyvas = [];
    for (let i = 0; i < 30 ; i++) {
        sugeneruotasmasyvas.push(rand(5, 25));
    }


let kiekDaugUz10 = 0;
// for (let i = 0; i < 30; i++) {
//     if (pirmasmasyvas[i] > 10) {
//         kiekDaugUz10++
//     }
// }

let dauguz10 = 0;
console.log(sugeneruotasmasyvas);
sugeneruotasmasyvas.forEach(item => {
        (item > 10) ? dauguz10++ : null
    });
console.log(dauguz10);


const variantasA = sugeneruotasmasyvas.length / 2 * (sugeneruotasmasyvas.length / 2 - 1);
let variantasAA = 0;
for (let i = 0; i < sugeneruotasmasyvas.length; i++) {
    if (i % 2 === 0) {
       variantasAA += i
    }
   }
console.log(variantasAA);
console.log(variantasA);


let variantasB = 0;

for (let i = 2; i < sugeneruotasmasyvas.length; i++) {
 if (i % 2 === 0) {
    variantasB += sugeneruotasmasyvas[i]
 }
}
console.log(variantasB);


let naujasmas = [];

for (let i = 0; i < sugeneruotasmasyvas.length; i++) {
   naujasmas.push(sugeneruotasmasyvas[i] - i)
}
console.log(naujasmas);

for (let i = 0; i < 10; i++) {
    sugeneruotasmasyvas.push(rand(5, 25))

}
console.log(sugeneruotasmasyvas);

const neporinis = [];
const porinis = [];

sugeneruotasmasyvas.forEach((elementas, index) => (index % 2 === 0) ? porinis.push(elementas) : neporinis.push(elementas));

console.log(neporinis);
console.log(porinis);

// const porinis0 = [];

sugeneruotasmasyvas.forEach((elementas, indexas) => elementas > 15 && !(indexas % 2) ? sugeneruotasmasyvas[indexas] = 0 : null);
console.log(sugeneruotasmasyvas);

console.log(sugeneruotasmasyvas);

// for (const m of sugeneruotasmasyvas) {

// }

let pirmasmaz = sugeneruotasmasyvas.find((elem, index) => elem > 10 ? index : null )

console.log(pirmasmaz);
console.log('hello')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const pirmosuzduotiesfunkcija = function (parametras, kiekkartu) {
//     for (i = 1; i <= kiekkartu; i++)
//     console.log(parametras)
// }

// pirmosuzduotiesfunkcija('tekstas argumentas', 10);



function ketv(parametras) {
    if (parametras > 1000000000) return 'per daug'
    let rezultatas = 0;
    for (i = 2; i <= parametras / 2; i++) {
        if (parametras % i === 0) {
            rezultatas++
        }
    }
    return rezultatas;
}
console.log(ketv(525));


const penktas = [];

for (i = 0; i < 100; i++) {
    penktas.push(rand(33, 77));
    
}
// console.log(penktas);

penktas.sort((a, b) => {
    if (ketv(a) < ketv(b)) {
        return 1;
    }
    if (ketv(a) > ketv(b)) {
        return -1;
    }
    return 0;
});
// console.log(penktas);

const sestas = [];

for (let i = 0; i < 100; i++) {
    sestas.push(rand(333, 777));
}

// const sestasBePirminiu = sestas.filter(item => ketv(item) / ketv(item) === 0 && ketv(item) / 1 === ketv(item) && ketv(item) / 2 != 0);
const sestasBePirminiu = sestas.filter(item => ketv(item) != 0);

console.log(sestasBePirminiu);


// console.log(penktas)


// console.log(ketv(9));


// let arr = [5,7,2,9,14,2]
 
//  arr.forEach(function(element, numeris) {
//  element = (element *3)

// });

// console.log(arr)
 

// let arr = [5,7,2,9,14,2,1,]



// arr.forEach((reiksme, indeksas) => {if ((indeksas + 1) % 2 === 0) arr[indeksas] = 'ragas' })


// console.log(arr)

// let karr = [16, 12, 24, 7, 9, 64]

// karr.forEach(reiksme => console.log(ketv(reiksme)));




// function bblSort(arr) {
 
//     for (var i = 0; i < arr.length; i++) {
 
//         // Last i elements are already in place  
//         for (var j = 0; j < (arr.length - i - 1); j++) {
 
//             // Checking if the item at present iteration 
//             // is greater than the next iteration
//             if (arr[j] > arr[j + 1]) {
 
//                 // If the condition is true
//                 // then swap them
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
 
//     // Print the sorted array
//     return arr;
// }

// console.log(bblSort(karr));

let pirmasmasyvas = [];

// for (i = 0; i < rand(10, 20); i++) {
//     pirmasmasyvas.push(rand(0, 10));
// }

let pirmomasyvopaskutiniselementas = [];

// for (i = 0; i < rand(10, 20); i++) {
//     pirmomasyvopaskutiniselementas.push(rand(0, 10));
// }

// pirmasmasyvas[pirmasmasyvas.length-1] = pirmomasyvopaskutiniselementas

// let randomas = rand(10, 30);

// masyvorandomas = rand(10, 20)
//        for (j = 0; j < masyvorandomas; j++) {
//         pirmasmasyvas.push(rand(0, 10));
//     }
//     paskelemmasrand = rand (10, 20)
//         for (k = 0; k < paskelemmasrand; k++) {
//         pirmomasyvopaskutiniselementas.push(rand(0, 10));
//     }
//     pirmasmasyvas[pirmasmasyvas.length-1] = pirmomasyvopaskutiniselementas

//     console.log(pirmasmasyvas);

// console.log('masyvo randomas: ', masyvorandomas);

// console.log('elem randomas: ', paskelemmasrand);


// console.log('ciklo kartu randomas: ', randomas);



// for (i = 0; i < randomas; i++) { 

//     masyvorandomas = rand(10, 20)
//        for (j = 0; j < masyvorandomas; j++) {
//         pirmasmasyvas.push(rand(0, 10));
//     }
//     paskelemmasrand = rand (10, 20)
//     for (k = 0; k < paskelemmasrand; k++) {
//         pirmomasyvopaskutiniselementas.push(rand(0, 10));
//     }
//     pirmasmasyvas[pirmasmasyvas.length-1] = pirmomasyvopaskutiniselementas
// }



// function septinta() {
//     kartai = rand(10, 30)
//     for (i = 0; i < kartai; i++) {

//     }
// }


//
// let miestai =  ['Vilnius', 'Kaunas', 'Klaipėda', 'Mažeikiai', 'Rusnė']
//
// console.log([miestai])
// console.log(miestai[1])
// //
// let skrydis =  [['Londonas',140], ['Berlynas',170], ['Viena',200], ['Tbilisis',90], ['Lisabona', 130 ,['ryanair', 'wizzair']]]
// //
// console.log(skrydis)
// console.log(skrydis[2])
// skrydis[4][2][0] = 'lufthansa'
//
// console.log(skrydis[4][2][0])
//
// let tbilisis = skrydis[3]
// console.log(tbilisis[1])
//
// console.log(skrydis)
// //
// //
// console.log(miestai.length)
// console.log(skrydis.length)
// //
//  console.log(miestai[miestai.length-1])
// //
// miestai.push('Šiauliai')
// miestai.push('')
// let uzsakymas
//
//     uzsakymas = (skrydis.pop())
//
// console.log(uzsakymas)
// console.log(skrydis)
//
// uzsakymas = (skrydis.pop())
// console.log(uzsakymas)
// console.log(skrydis)


//

// function dienosPavadinimas(n) {
//
//     let dienos = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis']
//
//     return dienos[n]
//
// }
//
// console.log(dienosPavadinimas(4))
//
// function visosDienos() {

//    let dienos = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis']

//     return dienos
// }

// console.log(visosDienos())


// function randomMasyvas(dydis, nuo, iki) {

//     masyvas = []

//     for (let x = 0; x < dydis; x++) {

//         masyvas.push(rand(nuo, iki))
//     }

//     return masyvas

// }
// let mas1

//  mas1 = randomMasyvas(rand(10,20), 0, 10)
// console.log(mas1)

//sukuriame atsitiktinio ilgio masyva su atsitiktiniais elementais

// let pirmasZingsnis = randomMasyvas(rand(10,20),0,10)
// console.log(pirmasZingsnis)
//
//
// console.log(pirmasZingsnis.length)
// console.log(pirmasZingsnis[pirmasZingsnis.length-1])
//
//
//
//
// pirmasZingsnis[pirmasZingsnis.length-1] = '999'
// console.log(pirmasZingsnis)
// //
// pirmasZingsnis[pirmasZingsnis.length-1] = randomMasyvas(rand(10,20),0,10)
// //
// console.log(pirmasZingsnis)

// sukuriame masyva is masyvu

// let didelis = []

// for (let x= 0; x < rand(10,30);x++) {

//     let masyvasIkelimui = randomMasyvas(rand(10,20),0,10)

//     masyvasIkelimui[masyvasIkelimui.length-1] = randomMasyvas(rand(10,20),0,10)

//     didelis.push(masyvasIkelimui)

// }

// console.log(didelis)



// //paskutinio paskutiniausio elemento radimas

// let paskutineeilute = didelis.length-1
// console.log(paskutineeilute)
// //
// let paskutinismasyvas = didelis[paskutineeilute].length-1
// console.log(paskutinismasyvas)
// //
// let paskutiniselementas = didelis[paskutineeilute][paskutinismasyvas].length-1
// //
// console.log(paskutiniselementas)
// //
// // //priskiriame jam nuli
// //
// didelis[paskutineeilute][paskutinismasyvas][paskutiniselementas] = 0
// //
// console.log(didelis)
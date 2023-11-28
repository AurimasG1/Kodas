1. //
// let kintpirmos1 = rand(5, 25);
// let kintpirmos2 = rand(5, 25);
// let kintpirmos3 = rand(5, 25);
// console.log(kintpirmos1, kintpirmos2, kintpirmos3);
// 1. A. //

// let sumaAdalis = kintpirmos1 + kintpirmos2 + kintpirmos3;
// console.log(`SumaAdalis ${sumaAdalis}`, typeof sumaAdalis);

// 1. B. //

// let suma = kintpirmos1 + kintpirmos2 + kintpirmos3 + '';
// console.log(suma);
// console.log(`Suma ${suma}`, typeof suma);

// 1. C. //

// let suma = kintpirmos1 + ' ' + kintpirmos2 + ' ' + kintpirmos3 + ' ';
// console.log(suma);
// console.log(`Suma ${suma}`, typeof suma);

// 1. D. //

// let suma = kintpirmos1 + ' ' + kintpirmos2 + ' ' + kintpirmos3 + ' ' + sumaAdalis;
// console.log(suma);
// console.log(`Suma ${suma}`, typeof suma, `SumaAdalis ${sumaAdalis}`, typeof sumaAdalis);


// // 2. //
// let antrasuzdavinys = rand(5, 10);

// console.log('Antro uzdavinio skaicius', antrasuzdavinys);

// // 3. //
// let treciasuzdavinys = "Labas";

// for (let i = 0; i < 5; i++) {
//     console.log('Trečia užduotis', treciasuzdavinys);
// }

// // 4. //
// for (let o = 0; o < 7; o++) {
//     console.log('Ketvirta užduotis', antrasuzdavinys);
// }

// // 5. //
// for (let p = 0; p < antrasuzdavinys; p++) {
//     console.log('Penkta užduotis', antrasuzdavinys);
// }

// // 6. //

// for (let q = 0; q < antrasuzdavinys && antrasuzdavinys > 7; q++ ) {
//     console.log('Šešta užduotis', antrasuzdavinys);
// }

// 7. //

// let seven;
// let sum = 0;
// let sum2 = 0;

// for (let w = 0; w < 5; w++) {
//     let randomas = rand(10, 20);
// }
// // 7. A. //
// for (let w = 0; w < 5; w++) {
//     let randomas = rand(10, 20);
//     seven = randomas;
//     console.log(seven);

// 7. B. //

// for (let w = 0; w < 5; w++) {
//     let randomas = rand(10, 20);
//     seven = seven || 0;
//     seven = seven + randomas;
//     console.log(seven);
// }

// 7. C. //

// for (let w = 0; w < 5; w++) {
//     let randomas = rand(10, 20);
//     seven = seven || ' ';
//     seven = seven + ' ' + randomas;
// }
//     console.log(seven);

// 7. D. //

// for (let w = 0; w < 5; w++) {
//      let randomas = rand(10, 20);
//     //  sum = sum + randomas;
//     //  seven = seven || ' ';
//     //  seven = seven + ' ' + randomas;
//      sum2 = sum2 + randomas;
//      seven = seven || ' ';
//      seven = seven + (w ? ' + ' : '') + randomas;
// }
// // seven = seven + ' ' + sum;
// seven = seven + ' = ' + sum2;
// console.log(seven);

// 8. //

// let randomas;
// let ciklas = 0;
// let suma = 0;
// let atmesti = 0;
// let lyginiai = 0;
// let nelyginiai = 0;

// 8. A. //

//     do {
//     randomas = rand(10, 25);
// } while (randomas > 12)
// console.log(randomas)

// 8. B. //

//     do {
//     randomas = rand(10, 25);
//     console.log(randomas, ++ciklas)
// } while (randomas > 12)
// console.log(`Ciklas kartojosi ${ciklas} kartų iki kol nebeatitiko sąlygos daugiau už 12`);

// 8. C, D, E //

//     do {
//     randomas = rand(10, 25);
//     console.log(randomas, ++ciklas)
//     if (randomas % 2 === 0) {
//     lyginiai++;
//     } else 
//     nelyginiai++;
//     if (randomas < 18) {
//     atmesti++;
//     } else (suma = suma + randomas);
// } while (randomas > 12)
// console.log(`Ciklas kartojosi ${ciklas} kartų iki kol nebeatitiko sąlygos daugiau už 12, o per ${ciklas} ciklo kartų išspausdintų skaičių didesnių už 18 suma yra ${suma}, tuo tarpu atmestų skaičių kiekis yra ${atmesti}, o lyginių yra ${lyginiai}, nelyginių yra ${nelyginiai}`);

// 8. E //

// do {
//     randomas = rand(10, 25);
//     console.log(randomas, ++ciklas)
//   } while (ciklas < 20)
// console.log(`Ciklas kartojosi ${ciklas} kartų`);

// 9. //

// 9. A.//

let randomas;
let didysisciklas = 0;
let ciklopabaiga;
let i;
let mazasisciklas = 0;
let randomo = 0;

// do {
//     randomas = rand(5, 10);
//     console.log('Išsirandomino ', randomas);
//     if (randomas != 5) {
//     if (randomas > 5) {
//         didysisciklas++
//         // console.log('Pirmas patikrinimas', didysisciklas, mazasisciklas);
//     } 
//     for (let i = 0; i < randomas; i++) {
//         mazasisciklas++;
//         console.log(i);
//     }

//     // console.log('Turetu buti atsakymas', didysisciklas, mazasisciklas);
//     }    
// } while (randomas != 5)

// console.log(`didysis ciklas ${didysisciklas}, mazasis ciklas ${mazasisciklas}`)


// // 9. B.//

do {
    randomas = rand(5, 10);
    console.log('Išsirandomino ', randomas);
    if (randomas > 5 && randomo != 3) {
        if (randomas != 5) {
            if (randomas > 5) {
        didysisciklas++
    } 
            for (let i = 0; i < randomas; i++) {
        mazasisciklas++;
        console.log(i);
    }
    }
    
    console.log('Randomo ', randomo)
    }
    else {
        if (randomas != 5) {
            if (randomas > 5) {
                didysisciklas++
            } 
            for (let i = 0; i < randomas; i++) {
                mazasisciklas++;
                console.log(i);
            }
            }
            
            randomo++
            console.log('Randomo ', randomo)
    }
    console.log('Randomo ', randomo)


    // else {
    //     if (randomas > 5) {
    //         didysisciklas++
    //         // console.log('Pirmas patikrinimas', didysisciklas, mazasisciklas);
    //     } 
    //     for (let i = 0; i < randomas; i++) {
    //         mazasisciklas++;
    //         console.log(i);
    //     }
    
    //     // console.log('Turetu buti atsakymas', didysisciklas, mazasisciklas);
    //     }
    //     randomo++
    // console.log(randomo)
    
} while (randomo != 3);

console.log(`didysis ciklas ${didysisciklas}, mazasis ciklas ${mazasisciklas}`)






// Bandymas kazkaip.... //

// console.log(randomas);

// bigCycle: for (let j = 0; j < randomas; j++) {
//     console.log('Israndomino ', randomas);
//     console.log('Didysis', j + 1);
//     didysisciklas = j || 0;
//     for (let i = 0; i < randomas; i++) {
//     console.log('Mazasis', i + 1);
//     mazasisciklas = i || 0;
//     mazasisciklas = i * didysisciklas;
//     }
//     if (randomas == 5)
//     break bigCycle;
//     console.log('Didysis ', didysisciklas, 'Mazasis',  mazasisciklas);
// }
// console.log('Didysis ', didysisciklas, 'Mazasis',  mazasisciklas);




10. //

// let Kazys;
// let Petras;
// let kaziotaskai = 0;
// let petrotaskai = 0;
// let laimetojas;


//     do {
//         Kazys = rand(10, 20);
//         Petras = rand(5, 25);
//         console.log(Kazys, Petras);
//         if (kaziotaskai <= 222) {
//             kaziotaskai = kaziotaskai + Kazys;
//         } 
//         if (petrotaskai <= 222) 
//             petrotaskai = petrotaskai + Petras;

//         console.log(`Kazio taškai ${kaziotaskai}, Petro taškai ${petrotaskai}`);

//         if (kaziotaskai >= 222 && petrotaskai >= 222) { 
//         laimetojas = 'LYGIOSIOS, nes per paskutinį bandymą abu vienodu metu pasiekė 222 ribą';
//         }
//         else if (kaziotaskai >= 222) {
//             laimetojas = 'Kazys';
//         }
//         else laimetojas = 'Petras';
//     } while (kaziotaskai <= 222 && petrotaskai <= 222)

// console.log(`Partiją laimėjo: ${laimetojas}`)


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


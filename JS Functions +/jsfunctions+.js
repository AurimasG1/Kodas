console.log('hello')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function pirmosuzduotiesfunkcija(parametras, kiekkartu) {
//     for (i = 1; i <= kiekkartu; i++)
//     console.log(parametras)
// }

// pirmosuzduotiesfunkcija('tekstas argumentas', 10);



function ketv(parametras) {
    let rezultatas = 0;
    for (i = 2; i <= parametras / 2; i++) {
        if (parametras % i === 0) {
            rezultatas++
        }
    }
    // console.log(rezultatas);
    return rezultatas;
    
}


let penktas = [];

for (i = 0; i < 100; i++) {
    // penktas[i] = rand(33, 77);
    penktas.push(rand(33, 77));
    
}

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

let randomas = rand(10, 30);

masyvorandomas = rand(10, 20)
       for (j = 0; j < masyvorandomas; j++) {
        pirmasmasyvas.push(rand(0, 10));
    }
    paskelemmasrand = rand (10, 20)
        for (k = 0; k < paskelemmasrand; k++) {
        pirmomasyvopaskutiniselementas.push(rand(0, 10));
    }
    pirmasmasyvas[pirmasmasyvas.length-1] = pirmomasyvopaskutiniselementas

    console.log(pirmasmasyvas);

console.log('masyvo randomas: ', masyvorandomas);

console.log('elem randomas: ', paskelemmasrand);

const kurimas = () => {
    console.log(rand(10, 30), 'kas cia', pirmasmasyvas[rand(10, 30)])
}

kurimas();

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

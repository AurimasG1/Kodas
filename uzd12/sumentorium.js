// if (x > 1 && x < 10) console.log()
// for (let index = 0; index < array.length; index++){
//     const element = array[index]
// }

const x = 100;
// funkcijosVardas(x);

function funkcijosVardas(iksas) {
    console.log('pirma funkcija', iksas);
}


const naujaFunkcija = function (kaipnors) {
    console.log('antra funkcija', kaipnors);
    funkcijosVardas(x);
}

// naujaFunkcija(x);

// arrow function
const arrowFunkcija = nezinau => console.log('trecia funkcija', nezinau);

// arrowFunkcija(x);

// var a = 100;

const lyginiaiNelyginiai = function (skaicius) {
    if (skaicius % 2 === 0) console.log('Skaicius yra lyginis', skaicius);
    else console.log('Skaicius yra nelyginis', skaicius)
}

const FizzBuzz = function() {
    const a = 'Fizz'; // Fizz + Buzz = FizzBuzz
    const b = 'Buzz';
    for (let i = 1; i <= 100; i++) {
        // console.log(i)
    if (i % 15 === 0 && i % 5 === 0) console.log(a + b);
    else if (i % 3 === 0) console.log(a);
    else if (i % 5 === 0) console.log(b);
    else console.log(i);
    }
}

FizzBuzz();

console.log('hello world');


// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else if (n > 1) {
//         for (let i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     } else {
//         return "number has to be positive.";
//     }
// }

// let n = 6;
// answer = factorial(n);
// console.log("Factorial of " + n + ":" + answer);

// factorial(6);

function funkcijaVienas(stringas) {
    let stringas2 = '';
    for (let i = stringas.length - 1; i >= 0; i--) {
    stringas2 += stringas[i];
    }
    console.log(stringas2);
}

funkcijaVienas('tarakonas kiek man dar reikia kodo');



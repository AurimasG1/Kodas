console.log('Have fun with functions!');

console.log('Start of the program');

console.log('Function delcaration start');

// function declaration
let fun1 = function() {
    return 'This is really fun1';
    console.log('This is fun1');
}

// let fun1 = function() {
//     console.log('This is fun1 clone')
// }

let fun2 = fun1();


console.log('fun2:', fun2, typeof fun2);

let cl = console.log;

cl('BEAVER!')

console.log('cl:', cl, typeof cl);


console.log('End of function delcaration');


// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

console.log('Start of the program');


// calling the function
fun1();
fun1();
fun1();


console.log('End of the program')



console.log('---------------End of the program-----------------------');

let fun3 = function() {
    console.log('This is fun3');
}

// arrow function

let fun4 = () => {
    console.log('This is fun4');
}

//one-liner arrow function
let fun5 = () => console.log('This is fun5');

let fun6 = () => {
    return 'This is really fun6';
}

let fun7 = () => 'This is really fun7';

let fun8 = (day = 'Sunday') => {
    return 'today is ' + day;
}


fun3();
fun4();
fun5();
fun6();
fun7();

console.log(typeof fun3, typeof fun4, typeof fun5);
console.log(fun6());
console.log(fun7());

let today = 'Friday';

console.log(fun8(today));

today = 'Saturday';

console.log(fun8(today));

console.log(fun8());

let fun9 = (a, b) => {
    return a > b;
}

let a = 2;
let b = 3;
let c = 4;

console.log(fun9(b, a, c));

console.log(fun9(b, a));

let fun10 = x => 3 * x;

console.log( fun10(8) );

let result = fun10(8);

console.log(result);

let fun11 = _ => console.log('This is dash');

fun11();
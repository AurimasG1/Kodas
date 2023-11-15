console.log('Welome to If Else world!');

// >, <, >=, <=, ==, ===, !=, !==

console.log ('Start');

console.log('1 km');

console.log('2 km');

if (5 > 35) {console.log('Bar');} 
else if (8 > 51) {
    console.log('Shop');
} else {
    console.log('Go home');
}

console.log('3 km');

console.log('4 km');

console.log('End');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
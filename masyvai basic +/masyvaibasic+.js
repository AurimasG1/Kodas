console.log('hello');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const pirmasmasyvas = [];

const masyvokurimas = function (ilgis, nuo, iki) {
    for (let i = 0; i < rand(0, 29) ; i++) {
    pirmasmasyvas.push(rand(5, 25));
}
}
console.log(pirmasmasyvas);
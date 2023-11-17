console.log('Hello');

// for (let i = 0; i < 5; i++) {
//     console.log('Hello, Racoon!', rand(0, 100));
// }
// zinome kiek bus ciklu

// let coin;
// do {
//     coin = rand(0, 1) ? 'Headas' : 'Tails';
//     console.log(`My coin is: ${coin} Nice!`);
// } while(coin != 'Headas');
// kai zinome kiek ciklu

// do {
//     var skaicius = rand(1, 20);
//     var skaicius2 = rand(1, 20);
//     console.log(skaicius, skaicius2);
// } while(skaicius <= 10 || skaicius2 <= 10);
// kai nezinome kiek ciklu

// > --- <=
// >= --- <==
// == ---- !=
// === ---- !==
// && ---- ||
// || ---- &&

let Fiodor = 0;

let mociute = rand(0, 500);

Fiodor += mociute;

console.log(`Fiodor po gimtadienio dovanos is mociutes gavo ${mociute} pinigu ir turi ${Fiodor} pinigu`);
while (Fiodor <= 300) {
    let money = rand(50, 200);
    Fiodor += money;
    console.log(`Fiodorui iki 300 euru dar truko pinigu, vaziavo padirbet su boltu ir po darbo jau turi ${Fiodor} pinigu, todel jau gali nusipirkti meskere uz 300`);
}


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
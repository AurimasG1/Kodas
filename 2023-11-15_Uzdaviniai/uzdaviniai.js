// let digit1 = rand(0, 4);
// let digit2 = rand(0, 4);

// console.log('digit1', digit1, 'digit2', digit2);

// if (digit1 > digit2) {
// let digit3 = digit1 / digit2;
// console.log('digit3PIRMAS', digit3);
// } else if (digit2 > digit1) {
//     let digit3 = digit2 / digit1;
//     console.log('digit3ANTRAS', digit3)
// }


// let fja2pirmas = rand(0, 25);
// let fja2antras = rand(0, 25);
// let fja2trecias = rand(0, 25);

// console.log('Pirmas', fja2pirmas, 'Antras', fja2antras, 'Trecias', fja2trecias);

// if (fja2pirmas > fja2antras && fja2antras > fja2trecias) {
// console.log('Antras vidurinis', fja2antras);
// } 
// else if (fja2pirmas < fja2antras && fja2antras < fja2trecias) {
//     console.log('Antras vidurinis', fja2antras); 
// }
// else if (fja2pirmas < fja2antras && fja2pirmas > fja2trecias) {
//     console.log('Pirmas vidurinis', fja2pirmas); 
// }
// else if (fja2pirmas > fja2antras && fja2pirmas < fja2trecias){
// console.log('Pirmas Vidurinis', fja2pirmas);
// }
// else if (fja2pirmas > fja2trecias && fja2antras < fja2trecias) {
//     console.log('Trecias vidurinis', fja2trecias);
// }
// else if (fja2antras > fja2trecias && fja2pirmas < fja2trecias) {
//     console.log('Trecias vidurinis', fja2trecias);
// }

// let klinija = rand(1, 10);
// let dlinija = rand(1, 10);
// let alinija = rand(1, 10);

// console.log(klinija, dlinija, alinija)

// if (klinija + dlinija > alinija && dlinija + alinija > klinija && klinija + alinija > dlinija ) {
//     console.log('Trikampis');
// }
// else {console.log('Ne trikampis');
// }

// let pirmasis = rand(0, 2);
// let antrasis = rand(0, 2);
// let treciasis = rand(0, 2);
// let ketvirtasis = rand(0, 2);
// let nuliai = 0;
// let vienetai = 0;
// let dvejetai = 0;

// console.log(pirmasis, antrasis, treciasis, ketvirtasis);

// if (pirmasis === 0) {nuliai++}
// if (antrasis === 0) {nuliai++}
// if (treciasis === 0) {nuliai++}
// if (ketvirtasis === 0) {nuliai++}

// if (pirmasis === 1) {vienetai++}
// if (antrasis === 1) {vienetai++}
// if (treciasis === 1) {vienetai++}
// if (ketvirtasis === 1) {vienetai++}

// console.log('nuliu yra', nuliai, 'vienetu yra', vienetai, 'dvejetu yra', 4-nuliai-vienetai);


// let a = rand(-10, 10);
// let b = rand(-10, 10);
// let c = rand(-10, 10);

// if (a < 0) {console.log('+'+a+ '+')}
// if (a === 0) {console.log('*'+a+'*')}
// if (a > 0) {console.log('-'+a+ '-')}

// if (b < 0) {console.log('+'+b+'+')}
// if (b === 0) {console.log('*'+b+'*')}
// if (b > 0) {console.log('-'+b+'-')}

// if (c < 0) {console.log('+'+c+'+')}
// if (c === 0) {console.log('*'+c+'*')}
// if (c > 0) {console.log('-'+c+'-')}

// console.log(a, b, c)

// let zvakiuskaicius = 2000;
// let zvakeskaina = zvakiuskaicius

// console.log('Zvakes be nuolaidos kainuos', zvakiuskaicius);

// if (zvakiuskaicius > 1000) {
//     console.log('Zvakes su 3% nuolaida kainuos', zvakeskaina * 0.97);
// }
// else {(zvakiuskaicius >= 2000); {
//     console.log('Zvakes su 4% nuolaida kainuos', (zvakeskaina-(zvakeskaina/100*4)));
// }

// let zvakiuskaicius = rand(5, 3000);
// let zvakeskaina = zvakiuskaicius

// console.log('Zvakes be nuolaidos kainuos', zvakiuskaicius);

// if (zvakiuskaicius > 2000) {
//     console.log('Zvakes su 4% nuolaida kainuos ', zvakeskaina * 0.96);
// } else {
// if (zvakiuskaicius < 2000 && zvakiuskaicius > 1000 ) {
//     console.log('Zvakes su 3% nuolaida kainuos ', zvakeskaina * 0.97)}
//      else {console.log('Be nuolaidos ', zvakiuskaicius)
// }}



function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
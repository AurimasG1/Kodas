console.log('hello');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// let auto55 = 10;
// let vidutinisgreitis = 0;
// let greitisporato = 0;
// let kuras;
// let bakas = 44;
// let vidutinisgreitisposukyje;
// let maziausiasgreitisposukyje;


// for (i = 0; i < 10; i++) {
//     console.log(auto55);
//     auto55--;
// }


// for (i = 0; i < 10; i++) {
//     let greitis = rand(120, 220);
//     console.log(i, greitis);
//     greitisporato = greitisporato + greitis;
//     vidutinisgreitis = greitisporato
// }
// console.log('Vidutinis greitis per 10 ratų buvo ', vidutinisgreitis / 10)


// for (i = 0; i < 10; i++) {
//     let kuras = rand(3, 6);
//     console.log('liko', auto55, 'ratu' , 'atims' , kuras, 'litru', 'liko', bakas, 'litru');
//     auto55--
//     bakas = bakas - kuras;
//     console.log('bakas po atemimo', bakas)
//     if (auto55 != 1 && bakas >= 0) {
//         console.log('pavyko uzbaigti')
//     }
//     else {console.log('nepavyko įveikti visų ratų')
//     }
// }


// for (i = 0; i < 10; i++) {
//         console.log('vaziuoja', auto55, 'rata')
//         auto55--
//     for (j = 0; j < 5; j++) {
//         let greitis = rand(20, 120)
//         console.log('greitis posukiuose ', greitis);
//         maziausiasgreitisposukyje = (maziausiasgreitisposukyje < greitis) ? maziausiasgreitisposukyje : greitis
//     }
// }
// console.log('maziausias greitis posukyje buvo ', maziausiasgreitisposukyje);


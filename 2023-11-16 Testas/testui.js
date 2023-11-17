let kamuoliukas1 = rand(1, 6);
let kamuoliukas2 = rand(1, 6);
console.log(kamuoliukas1, kamuoliukas2)

if (kamuoliukas1+kamuoliukas2 > 8) {
    console.log('Laimejote');
} else {
    console.log('Pralaimejote');
}

let pilkis = rand(3, 6);
let murklys = rand(3, 6);
console.log('pilkis sveria ', pilkis, 'murklys sveria', murklys)

if (pilkis > murklys) {
    console.log('murklys yra lengvesnis katinukas');
}else if (murklys > pilkis) {
    console.log('pilkis yra lengvesnis katinukas');
}else if (pilkis === murklys) {
    console.log('katinukų svoriai vienodi');
}

let valtis1 = 15;
let valtis2 = 15;
let katinukai = rand(0, 30);
let karviu = rand(0, 30);

console.log('katinuku skaicius ', katinukai, 'karviu skaicius', karviu)

if (katinukai <= valtis1 && karviu <= valtis2) 
{console.log('Telpa');
} else if (katinukai > valtis1 && karviu > valtis2){
console.log('Netelpa');
} else if (katinukai > valtis1 && karviu <= valtis2) {
    console.log('Netelpa');
} else if (katinukai <= valtis1 && karviu > valtis2) {
    console.log('Netelpa');
}


let kauliukas = rand(1, 6);
console.log('Kauliukas isrideno', kauliukas);
let a = 'Pirks televizoriu';
let b = 'Pirks skalbimo masina';
let c = 'Pirks saldytuva';

if (kauliukas === 1 || kauliukas === 5) {
    console.log(a);
} else if (kauliukas === 3 || kauliukas === 4) {
    console.log(b);
} else if (kauliukas === 2 || kauliukas === 6) {
    console.log (c);
}

let skaicius1 = rand(1, 7);
let skaicius2 = rand(1, 7);
let skaicius3 = rand(1, 7);

console.log('Trys atsiktiniai yra ', skaicius1, skaicius2, skaicius3)

if (skaicius1 < skaicius2 && skaicius1 < skaicius3 && skaicius2 < skaicius3) {
    console.log('Nuo maziausio iki didziausio Pirmas, Antras, Trecias', skaicius1, skaicius2, skaicius3);
} else if (skaicius2 > skaicius1 && skaicius2 > skaicius3 && skaicius1 > skaicius3) {
    console.log('Nuo maziausio iki didziausio Trecias, Pirmas, Antras', skaicius3, skaicius1, skaicius2);
} else if (skaicius2 > skaicius1 && skaicius2 > skaicius3 && skaicius1 < skaicius3) {
    console.log('Nuo maziausio iki didziausio Pirmas, Trecias, Antras', skaicius1, skaicius3, skaicius2);
} else if (skaicius2 < skaicius1 && skaicius2 > skaicius3 && skaicius1 > skaicius3) {
    console.log('Nuo maziausio iki didziausio Trecias, Antras, Pirmas', skaicius3, skaicius2, skaicius1);
} else if (skaicius2 < skaicius1 && skaicius2 < skaicius3 && skaicius1 > skaicius3) {
    console.log('Nuo maziausio iki didziausio Antras, Trecias, Pirmas', skaicius2, skaicius3, skaicius1);
} else if (skaicius3 > skaicius2 && skaicius3 > skaicius1 && skaicius2 > skaicius1) {
    console.log('Nuo maziausio iki didziausio Pirmas, Antras, Trecias', skaicius1, skaicius2, skaicius3);
} else if (skaicius3 > skaicius2 && skaicius3 > skaicius1 && skaicius2 < skaicius1) {
    console.log('Nuo maziausio iki didziausio Antras, Pirmas, Trecias', skaicius2, skaicius1, skaicius3);
} else if (skaicius3 === skaicius1 && skaicius2 > skaicius1) {
    console.log('Nuo maziausio iki didziausio Pirmas, Trecias, Antras', skaicius1, skaicius3, skaicius2);
} else if (skaicius3 === skaicius1 && skaicius2 < skaicius1) {
    console.log('Nuo maziausio iki didziausio Antras, Trecias, Pirmas', skaicius2, skaicius3, skaicius1);
} else if (skaicius3 === skaicius2 && skaicius2 < skaicius1) {
    console.log('Nuo maziausio iki didziausio Trecias, Antras, Pirmas', skaicius3, skaicius2, skaicius1);
} else if (skaicius3 === skaicius2 && skaicius2 > skaicius1) {
    console.log('Nuo maziausio iki didziausio Pirmas, Antras, Trecias', skaicius1, skaicius2, skaicius3);
} else if (skaicius2 === skaicius1 && skaicius2 < skaicius3) {
    console.log('Nuo maziausio iki didziausio Pirmas, Antras, Trecias', skaicius1, skaicius2, skaicius3);
} else if (skaicius2 === skaicius1 && skaicius2 > skaicius3) {
    console.log('Nuo maziausio iki didziausio Trecias, Antras, Pirmas', skaicius3, skaicius2, skaicius1);
} else if (skaicius2 === skaicius1 && skaicius2 === skaicius3) {
    console.log('Nuo maziausio iki didziausio Pirmas, Antras, Trecias', skaicius1, skaicius2, skaicius3);
}



function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
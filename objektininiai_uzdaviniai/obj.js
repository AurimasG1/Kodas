// class Kibiras1 {

//     constructor() {
//         this.akmenuKiekis = 0;
//     }

//     prideti1Akmeni() {
//         this.akmenuKiekis++;
//     }

//     pridetiDaugAkmenu(kiekis) {
//         this.akmenuKiekis += kiekis;
//     }
    
//     kiekPririnktaAkmenu() {
//         console.log(this.akmenuKiekis);
//     }

// }

// const kibiras = new Kibiras1();

// kibiras.prideti1Akmeni();
// kibiras.prideti1Akmeni();
// kibiras.prideti1Akmeni();
// kibiras.pridetiDaugAkmenu(10);
// kibiras.kiekPririnktaAkmenu();

// class Pinigine {

//     constructor() {

//         this.popieriniaiPinigai = 0;
//         this.metaliniaiPinigai = 0;

//     }

//     ideti(kiekis) {
//         if (kiekis < 2) {
//             this.metaliniaiPinigai += kiekis;
//         } else {
//             this.popieriniaiPinigai += kiekis;
//         }
//     }

//     skaiciuoti() {
//         console.log(this.popieriniaiPinigai + this.metaliniaiPinigai);
//     }
// }

// const pinigai = new Pinigine();

// pinigai.ideti(15);
// pinigai.ideti(1);
// pinigai.ideti(2);
// pinigai.ideti(3);
// pinigai.skaiciuoti();

// class Troleibusas {

//     constructor() {

//         this.keleiviuSkaicius = 0;
//     }

//     ilipa(keleiviuSkaicius) {

//         this.keleiviuSkaicius += keleiviuSkaicius
//     }
    
//     islipa(keleiviuSkaicius) {
//         if (keleiviuSkaicius > this.keleiviuSkaicius) {
//             this.keleiviuSkaicius = 0;
//         } else {
//             this.keleiviuSkaicius -= keleiviuSkaicius
//         }
//     }

//     vaziuoja() {
//         if (this.keleiviuSkaicius == 0) {
//             console.log('vaziuoja tuscias');
//         }

//         console.log(this.keleiviuSkaicius);
//     }

// }

// const trolis = new Troleibusas();

// trolis.ilipa(60);
// trolis.islipa(59);
// trolis.vaziuoja();


// Obj 6 ----------------------------------------

// class Pinigine {

//     constructor() {

//         this.popieriniaiPinigai = 0;
//         this.metaliniaiPinigai = 0;
//         this.monetos = 0;
//         this.banknotai = 0;

//         }

//     ideti(kiekis) {
//         if (kiekis <= 2) {

//             this.metaliniaiPinigai += kiekis;
//             this.monetos++
//         } else {

//             this.popieriniaiPinigai += kiekis;
//             this.banknotai++
//         }
//     }

//     skaiciuoti() {
//         console.log('Pinigai: ', this.popieriniaiPinigai + this.metaliniaiPinigai, 'Monetos: ' , this.monetos, 'Banknotai: ', this.banknotai);
//     }

//     monetos() {
//         console.log(this.monetos);
//     }

//     banknotai() {
//         console.log(this.banknotai);
//     }
// }

// const pinigai = new Pinigine();

// pinigai.ideti(15);
// pinigai.ideti(1);
// pinigai.ideti(2);
// pinigai.ideti(3);
// pinigai.ideti(4);
// pinigai.skaiciuoti();

// Obj 8 -------------------------------------------

class Stikline {
    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        if (kiekis + this.kiekis > this.turis) {
            this.kiekis = this.turis;
        }
        else {
            this.kiekis += kiekis;
        }

    }

    ispilti() {
        const temp = this.kiekis
        this.kiekis = 0;
        return temp;
    }

    stiklinejeYra() {
        console.log(this.kiekis);
        return this.kiekis;
    }
}

// const pilam = new Stikline(365);
const duSimtai = new Stikline(200);
const simtasPem = new Stikline(150);
const simtas = new Stikline(100);


duSimtai.ipilti(200);
simtasPem.ipilti(duSimtai.ispilti());
simtasPem.stiklinejeYra();
duSimtai.stiklinejeYra();
simtas.ipilti(simtasPem.ispilti());
simtas.stiklinejeYra();
simtasPem.stiklinejeYra();

// simtas.ipilti(simtasPem.ipilti(duSimtai.ispilti()))
// console.log(duSimtai, simtasPem, simtas);
// pilam.ipilti(360);
// pilam.ipilti(4);
// pilam.ispilti(400);
// console.log(pilam);
// console.log(pilam.kiekis);
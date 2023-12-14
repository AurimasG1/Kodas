// 1 ----------------------------------------------

class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }
    
    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis, ' akmenu');
    }

}

const kibiras = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(10);
kibiras.kiekPririnktaAkmenu();

// 2 --------------------------------------------------------------

class Pinigine {

    constructor() {

        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;

    }

    ideti(kiekis) {
        if (kiekis < 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        console.log(this.popieriniaiPinigai + this.metaliniaiPinigai,  'pinigu');
    }
}

const pinigai = new Pinigine();

pinigai.ideti(15);
pinigai.ideti(1);
pinigai.ideti(2);
pinigai.ideti(3);
pinigai.skaiciuoti();

class Troleibusas {

    constructor() {

        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {

        this.keleiviuSkaicius += keleiviuSkaicius
    }
    
    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > this.keleiviuSkaicius) {
            this.keleiviuSkaicius = 0;
        } else {
            this.keleiviuSkaicius -= keleiviuSkaicius
        }
    }

    vaziuoja() {
        if (this.keleiviuSkaicius == 0) {
            console.log('vaziuoja tuscias');
        } else {
            console.log(this.keleiviuSkaicius, ' keleiviu vaziuoja');

        }
    }

}

const trolis = new Troleibusas();

trolis.ilipa(60);
trolis.islipa(59);
trolis.vaziuoja();


// Obj 6 ----------------------------------------

class Pinigine2 {

    constructor() {

        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.monetos = 0;
        this.banknotai = 0;

        }

    ideti(kiekis) {
        if (kiekis <= 2) {

            this.metaliniaiPinigai += kiekis;
            this.monetos++
        } else {

            this.popieriniaiPinigai += kiekis;
            this.banknotai++
        }
    }

    skaiciuoti() {
        console.log('Pinigai: ', this.popieriniaiPinigai + this.metaliniaiPinigai, 'Monetos: ' , this.monetos, 'Banknotai: ', this.banknotai);
    }

    monetos() {
        console.log(this.monetos);
    }

    banknotai() {
        console.log(this.banknotai);
    }
}

const pinigai2 = new Pinigine2();

pinigai2.ideti(15);
pinigai2.ideti(1);
pinigai2.ideti(2);
pinigai2.ideti(3);
pinigai2.ideti(4);
pinigai2.skaiciuoti();

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

const duSimtai = new Stikline(200);
const simtasPem = new Stikline(150);
const simtas = new Stikline(100);


duSimtai.ipilti(200);
simtasPem.ipilti(duSimtai.ispilti());
duSimtai.stiklinejeYra();
simtasPem.stiklinejeYra();
simtas.ipilti(simtasPem.ispilti());
simtasPem.stiklinejeYra();
simtas.stiklinejeYra();

// 5 -------------------------------------------------

class PirkiniuKrepselis {
    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        if (this.turinys.has('sureliai')) {
            this.turinys.set('sureliai', this.turinys.get('sureliai') + kiekis)
        } else {
            this.turinys.set('sureliai', kiekis);
        }
    }
    idetiPieno(kiekis) {
        if (this.turinys.has('pienas')) {
            this.turinys.set('pienas', this.turinys.get('pienas') + kiekis)
        } else {
            this.turinys.set('pienas', kiekis);
        }
    }

    idetiDuonos(kiekis) {
        if (this.turinys.has('duona')) {
            this.turinys.set('duona', this.turinys.get('duona') + kiekis)
        } else {
            this.turinys.set('duona', kiekis);
        }
    }
    krepselioTurinys() {
        console.log(this.turinys);
        for (const produktas of this.turinys) {
            console.log(`${produktas[0]} : ${produktas[1]}`);
        }
    }
}

const krepselis = new PirkiniuKrepselis();

krepselis.idetiSureli(2);
krepselis.idetiPieno(1);
krepselis.idetiDuonos(1);
krepselis.idetiPieno(1);

krepselis.krepselioTurinys();


// 9 ----------------------------------------------------

class Grybas {
    static g = {}
    
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    constructor() {
        this.valgomas = !this.rand(0, 1)
        this.sukirmijes = !this.rand(0, 1)
        this.svoris = this.rand(5, 45);
        console.log('svoris', this.svoris);
    }
}

class Krepsys {

    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }
    ideti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.dydis > this.prikrauta;
    }
}


const krepsys = new Krepsys();

let s = 0;

const g = new Grybas()

while (krepsys.ideti(new Grybas())) {
    s++
    console.log('ciklas', s);
    if (s == 1000) {
        break;
    }
}
console.log(krepsys);












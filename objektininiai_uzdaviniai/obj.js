class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis + kiekis;
    }
    
    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis);
    }

}

const kibiras = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();


console.log(kibiras);
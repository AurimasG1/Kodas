console.log('ho');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];


bitGirls.unshift('Nauseda');
console.log(bitGirls);

// const bitCats = [...cats];

let katinuko_svoris1 = 'storas';
let katinuko_svoris2 = 'normalus';


const bitCats = cats.map((vardas, index) => {
  if (index = rand(0, 1)) {
    return { vardas: vardas, svoris: 'storas' };
  } else return { vardas: vardas, svoris: 'normalus' };
});

// let bitCats = cats.map((vardas) => { return (rand(1, 2) == 1) ? [vardas, 'storas'] : [vardas, 'plonas'] })
// const bitCats = cats.map((vardas) => { return (rand(1, 2) === 1) ? { vardas: vardas, svoris: 'storas' } : { vardas: vardas, svoris: 'plonas' } })
// const bitCats = cats.map((vardas) => { return (rand(1, 2) === 1) ? { kaciukoklicka: vardas, svoris: 'storas' } : { kaciukoklicka: vardas, svoris: 'plonas' } })
console.log(bitCats);

const bitDogs = cats.map((vardas, index) => {
  return (rand(0, 1)) ? { vardas: vardas, svoris: 'storas' } : { vardas: vardas, svoris: 'normalus' };
}
);
console.log(bitDogs);



let storu = 0;
let normaliu = 0;

bitCats.forEach(elem => elem.svoris === 'storas' ? storu++ : normaliu++);
console.log('bitCats masyve yra ', 'storu: ', storu, 'normaliu: ', normaliu);

// bitCats.sort((elem, index) => elem.vardas(vardas.forEach()) == 1 ? elem.unshift(index) : null)

console.log(bitCats);



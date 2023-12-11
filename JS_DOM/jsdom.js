// 1 A
const h1 = document.querySelector('h1');
// h1.style.color = 'green';
// 1 B
const i = document.querySelector('i');
i.classList.add('small');
// 1 C
h1.classList.remove('main');
// 1 D
const h2pirmas = document.querySelector('h2');
h2pirmas.classList.add('first');
h2pirmas.classList.remove('main');
// 1 E
const spanpirmas = document.querySelector('h2 span');
spanpirmas.style.fontSize = '10px';
spanpirmas.style.color = 'grey';

// ------------------------------------------------------------------------
// 2 A
const h2visi = document.querySelectorAll('h2');
console.log(h2visi.length);
// 2 B
const h2befirst = document.querySelectorAll('h2:not(.first)');
console.log(h2befirst.length);
// console.log(h2visi.length - document.querySelectorAll('h2.first').length);
// 2 C
h2visi.forEach(spalva => {
  spalva.style.color = 'skyblue';
  // spalva.classList.remove('first');
});
// 2 D
const divPrices = document.querySelectorAll('div.prices h2');
divPrices.forEach(tagas => {
  tagas.classList.add('price-tag');
});
// 2 E
const suNew = document.querySelectorAll('.new');
suNew.forEach(pabraukti => {
  pabraukti.style.textDecoration = 'underline';
});
// 2 F
const gyvunuKategorijos = document.querySelectorAll('div.animals ul');
console.log(gyvunuKategorijos.length);
// 2 F
const zirafuSkaicius = document.querySelectorAll('#zirafos li:not(.like-button)');
console.log(zirafuSkaicius.length);
// 2 G
const ulaisuremeliais = document.querySelectorAll('ul');
ulaisuremeliais.forEach(borders => {
  borders.style.border = '1px solid black';
  borders.style.padding = '15px 50px';
});
// 2 H
const naujigyvunai = document.querySelectorAll('.new');
console.log(naujigyvunai.length);
// 2 I
const naujoszirafos = document.querySelectorAll('#zirafos .new');
console.log(naujoszirafos.length);
const naujiplesrunai = document.querySelectorAll('#plesrunai .new');
console.log(naujiplesrunai.length);
const naujosgyvates = document.querySelectorAll('#gyvates .new');
console.log(naujosgyvates.length);
const naujizoliaedziai = document.querySelectorAll('#zoliaedziai .new');
console.log(naujizoliaedziai.length);

// ------------------------------------------------------------------------
// 3 A
const but1 = document.querySelector('#h1-color');
but1.addEventListener('click', _ => {
  h1.style.color = 'green';
});

const but2 = document.querySelector('#h1-font');
but2.addEventListener('click', _ => {
  h1.style.fontSize = '10px';
});

// 3 B ------------------------------------------------------------------------
i.addEventListener('click', _ => {
  i.style.fontWeight = 'bold';
});
// 3 C ------------------------------------------------------------------------
const pricesklases = document.querySelector('.prices');
let skaiciuoklis = 0;
pricesklases.addEventListener('click', e => {
  e.stopPropagation();
  skaiciuoklis++;
  if (skaiciuoklis % 2 === 0 && skaiciuoklis !== 0) {
    pricesklases.style.backgroundColor = 'white';
  } else pricesklases.style.backgroundColor = 'gray';
  // pricesklases.classList.toggle('bg-gray');
});

// 3 D ------------------------------------------------------------------------
const contacts = document.querySelector('#contacts');
contacts.addEventListener('click', _ => {
  contacts.style.color = 'orange';
});
// 3 E ------------------------------------------------------------------------
const padidinti = document.querySelector('#contacts u');
padidinti.addEventListener('click', e => {
  e.stopPropagation();
  contacts.style.fontSize = '20px';
});
// 3 F ------------------------------------------------------------------------
const xas = document.querySelector('#contacts b');
xas.addEventListener('click', e => {
  e.stopPropagation();
  contacts.style.fontSize = '16px';
  contacts.style.color = 'black';
});
// 3 G ------------------------------------------------------------------------
const but3 = document.querySelector('#h1-color-back');
but3.addEventListener('click', _ => {
  h1.style.color = 'black';
});
const but4 = document.querySelector('#h1-font-back');
but4.addEventListener('click', _ => {
  h1.style.fontSize = '32px';
});

// ------------------------------------------------------------------------
// 4 A
const dblpirmanewzirafa = document.querySelectorAll('#zirafos .new')[0];
dblpirmanewzirafa.addEventListener('dblclick', _ => {
    dblpirmanewzirafa.style.color = 'red';
    dblpirmanewzirafa.style.userSelect = 'none';
  });
const dblantranewzirafa = document.querySelectorAll('#zirafos .new')[1];
dblantranewzirafa.addEventListener('dblclick', _ => {
  dblantranewzirafa.style.color = 'red';
  dblantranewzirafa.style.userSelect = 'none';
});

const dblpirmasnaujasplesrunas = document.querySelectorAll('#plesrunai .new')[0];
dblpirmasnaujasplesrunas.addEventListener('dblclick', _ => {
  dblpirmasnaujasplesrunas.style.color = 'red';
  dblpirmasnaujasplesrunas.style.userSelect = 'none';
});

const dblpirmasnaujaszoliaedis = document.querySelectorAll('#zoliaedziai .new')[0];
dblpirmasnaujaszoliaedis.addEventListener('dblclick', _ => {
  dblpirmasnaujaszoliaedis.style.color = 'red';
  dblpirmasnaujaszoliaedis.style.userSelect = 'none';
});
// ------------------------------------------------------------------------
// 4 B
// Zirafos
const zirafa1 = document.querySelectorAll('#zirafos li')[1];
zirafa1.addEventListener('click', _ => {
  zirafa1.style.fontSize = '130%'
});
const zirafa2 = document.querySelectorAll('#zirafos li')[2];
zirafa2.addEventListener('click', _ => {
  zirafa2.style.fontSize = '130%'
});
const ziarafa3 = document.querySelectorAll('#zirafos li')[3];
ziarafa3.addEventListener('click', _ => {
  ziarafa3.style.fontSize = '130%'
});
const zirafa4 = document.querySelectorAll('#zirafos li')[4];
zirafa4.addEventListener('click', _ => {
  zirafa4.style.fontSize = '130%'
});
// Plesrunai ------------------------------------------------------------------------
const plesrunai1 = document.querySelectorAll('#plesrunai li')[1];
plesrunai1.addEventListener('click', _ => {
  plesrunai1.style.fontSize = '130%'
});
const plesrunai2 = document.querySelectorAll('#plesrunai li')[2];
plesrunai2.addEventListener('click', _ => {
  plesrunai2.style.fontSize = '130%'
});
const plesrunai3 = document.querySelectorAll('#plesrunai li')[3];
plesrunai3.addEventListener('click', _ => {
  plesrunai3.style.fontSize = '130%'
});
const plesrunai4 = document.querySelectorAll('#plesrunai li')[4];
plesrunai4.addEventListener('click', _ => {
  plesrunai4.style.fontSize = '130%'
});
// Gyvates ------------------------------------------------------------------------
const gyvates1 = document.querySelectorAll('#gyvates li')[1];
gyvates1.addEventListener('click', _ => {
  gyvates1.style.fontSize = '130%'
});
const gyvates2 = document.querySelectorAll('#gyvates li')[2];
gyvates2.addEventListener('click', _ => {
  gyvates2.style.fontSize = '130%'
});
const gyvates3 = document.querySelectorAll('#gyvates li')[3];
gyvates3.addEventListener('click', _ => {
  gyvates3.style.fontSize = '130%'
});
const gyvates4 = document.querySelectorAll('#gyvates li')[4];
gyvates4.addEventListener('click', _ => {
  gyvates4.style.fontSize = '130%'
});
// Zoliaedziai ------------------------------------------------------------------------
const zoliaedziai1 = document.querySelectorAll('#zoliaedziai li')[1];
zoliaedziai1.addEventListener('click', _ => {
  zoliaedziai1.style.fontSize = '130%'
});
const zoliaedziai2 = document.querySelectorAll('#zoliaedziai li')[2];
zoliaedziai2.addEventListener('click', _ => {
  zoliaedziai2.style.fontSize = '130%'
});
const zoliaedziai3 = document.querySelectorAll('#zoliaedziai li')[3];
zoliaedziai3.addEventListener('click', _ => {
  zoliaedziai3.style.fontSize = '130%'
});
const zoliaedziai4 = document.querySelectorAll('#zoliaedziai li')[4];
zoliaedziai4.addEventListener('click', _ => {
  zoliaedziai4.style.fontSize = '130%'
});
const zoliaedziai5 = document.querySelectorAll('#zoliaedziai li')[5];
zoliaedziai5.addEventListener('click', _ => {
  zoliaedziai5.style.fontSize = '130%'
});
const zoliaedziai6 = document.querySelectorAll('#zoliaedziai li')[6];
zoliaedziai6.addEventListener('click', _ => {
  zoliaedziai6.style.fontSize = '130%'
});


// 4 C ------------------------------------------------------------------------
const patinka1 = document.querySelectorAll('.like-button')[0];
const patinka1tevas = document.querySelector('#zirafos');
patinka1.addEventListener('click', _ => {
  patinka1tevas.classList.add('like')
});
const patinka2 = document.querySelectorAll('.like-button')[1];
const patinka2tevas = document.querySelector('#plesrunai');
patinka2.addEventListener('click', _ => {
  patinka2tevas.classList.add('like')
});
const patinka3 = document.querySelectorAll('.like-button')[2];
const patinka3tevas = document.querySelector('#gyvates');
patinka3.addEventListener('click', _ => {
  patinka3tevas.classList.add('like');
});
const patinka4 = document.querySelectorAll('.like-button')[3];
const patinka4tevas = document.querySelector('#zoliaedziai');
patinka4.addEventListener('click', _ => {
  patinka4tevas.classList.add('like');
});

// 5 A ------------------------------------------------------------------------
const senjoruvieta = document.querySelector('.prices');
const senjoruelementas = document.createElement('h2');
const senjorutextnode = document.createTextNode('Senjorai tik: 1.99 eur');
senjoruelementas.appendChild(senjorutextnode);
senjoruvieta.appendChild(senjoruelementas);

// 5 B
const senjoruvieta2 = document.querySelector('.prices');
const senjoruelementas2 = document.createElement('h2');
const senjorutextnode2 = document.createTextNode('Senjorų grupė iki 10: tik 5.99 eur');
senjoruelementas2.classList.add('new');
senjoruelementas2.appendChild(senjorutextnode2);
senjoruvieta2.appendChild(senjoruelementas2);
senjoruelementas2.addEventListener('click', e => {
  e.stopPropagation();
  senjoruelementas2.style.color = 'green';
});

// 5 C
const nepatinka1Vieta = document.querySelectorAll('#zirafos li')[0];
const nepatinkaLiElementas1 = document.createElement('li');
const nepatinkaLitextNode1 = document.createTextNode('NEPATINKA');
nepatinkaLiElementas1.appendChild(nepatinkaLitextNode1);
nepatinka1Vieta.insertAdjacentElement('afterend', nepatinkaLiElementas1);
nepatinkaLiElementas1.addEventListener('click', _ => {
  patinka1tevas.classList.remove('like')
});

const nepatinka2Vieta = document.querySelectorAll('#plesrunai li')[0];
const nepatinkaLiElementas2 = document.createElement('li');
const nepatinkaLitextNode2 = document.createTextNode('NEPATINKA');
nepatinkaLiElementas2.appendChild(nepatinkaLitextNode2);
nepatinka2Vieta.insertAdjacentElement('afterend', nepatinkaLiElementas2);
nepatinkaLiElementas2.addEventListener('click', _ => {
  patinka2tevas.classList.remove('like')
});

const nepatinka3Vieta = document.querySelectorAll('#gyvates li')[0];
const nepatinkaLiElementas3 = document.createElement('li');
const nepatinkaLitextNode3 = document.createTextNode('NEPATINKA');
nepatinkaLiElementas3.appendChild(nepatinkaLitextNode3);
nepatinka3Vieta.insertAdjacentElement('afterend', nepatinkaLiElementas3);
nepatinkaLiElementas3.addEventListener('click', _ => {
  patinka3tevas.classList.remove('like')
});

const nepatinka4Vieta = document.querySelectorAll('#zoliaedziai li')[0];
const nepatinkaLiElementas4 = document.createElement('li');
const nepatinkaLitextNode4 = document.createTextNode('NEPATINKA');
nepatinkaLiElementas4.appendChild(nepatinkaLitextNode4);
nepatinka4Vieta.insertAdjacentElement('afterend', nepatinkaLiElementas4);
nepatinkaLiElementas4.addEventListener('click', _ => {
  patinka4tevas.classList.remove('like')
});

// 5 D
const header3mygtukuvieta = document.querySelectorAll('fieldset')[1];
const header3MygtukuFieldsetElementas = document.createElement('fieldset');
const header3mygtukuLegendElementas = document.createElement('legend');
const header3mygtukuLegendElementoTekstas = document.createTextNode('HEADER 3');
const header3mygtukas1 = document.createElement('button');
const header3mygtukas2 = document.createElement('button');
const header3mygtuko1Tekstas = document.createTextNode('Pabraukti H1 tagą');
const header3mygtuko2Tekstas = document.createTextNode('Nepabraukti H1 tagą');
header3mygtukas1.appendChild(header3mygtuko1Tekstas);
header3mygtukas2.appendChild(header3mygtuko2Tekstas);
header3MygtukuFieldsetElementas.appendChild(header3mygtukuLegendElementas);
header3mygtukuvieta.insertAdjacentElement('afterend', header3MygtukuFieldsetElementas)
header3mygtukuLegendElementas.appendChild(header3mygtukuLegendElementoTekstas);
header3mygtukuLegendElementas.insertAdjacentElement('afterend', header3mygtukas2);
header3mygtukuLegendElementas.insertAdjacentElement('afterend', header3mygtukas1);
header3mygtukas1.addEventListener('click', _ => {
  h1.style.textDecoration = 'underline';
});
header3mygtukas2.addEventListener('click', _ => {
  h1.style.textDecoration = 'none';

});
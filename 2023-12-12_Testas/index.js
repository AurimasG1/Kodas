// 1 ------------------------------

const bodyVieta = document.querySelector('body');
const h21Elementas1 = document.createElement('h2');
const h21Elementas2 = document.createElement('h2');
const buttonElementas = document.createElement('button')
bodyVieta.appendChild(h21Elementas1);
bodyVieta.appendChild(h21Elementas2);
bodyVieta.appendChild(buttonElementas);

buttonElementas.addEventListener('click', _ => {
    randskaicius1 = rand(1, 6);
    randskaicius2 = rand(1, 6);
    
    if (randskaicius1 == randskaicius2) {
        // tekstas1 = h21Elementas1.innerText;
        // tekstas2 = h21Elementas2.innerText;
        h21El1tekstonodas = document.createTextNode(randskaicius1);
        h21Elementas1.appendChild(h21El1tekstonodas);
        h21El2tekstonodas = document.createTextNode(randskaicius2);
        h21Elementas2.appendChild(h21El2tekstonodas);
        h21Elementas1.style.color = 'red';
        h21Elementas2.style.color = 'red';
    }
    else {
        tekstas1 = h21Elementas1.innerText;
        tekstas2 = h21Elementas2.innerText;
        h21El1tekstonodas = document.createTextNode(randskaicius1);
        h21Elementas1.appendChild(h21El1tekstonodas);
        h21El2tekstonodas = document.createTextNode(randskaicius2);
        h21Elementas2.appendChild(h21El2tekstonodas);
        h21Elementas1.style.color = 'black';
        h21Elementas2.style.color = 'black';
    }
})


// 2 --------------------------------------
const tusciasMas = [];
const h3Elementas = document.createElement('h3');
const buttonElementas2 = document.createElement('button')
bodyVieta.appendChild(h3Elementas);
bodyVieta.appendChild(buttonElementas2);


buttonElementas2.addEventListener('click', _ => {
    skaicius1 = rand(1, 10);
    tusciasMas.push(skaicius1);
    // let sum = 0;
    // for (let i = 0; i < tusciasMas.length; i++) {
    // sum += tusciasMas[i]
    // }
    // h3Elementas.innerText = sum
    h3Elementas.innerText = skaiciuoti(tusciasMas)
    console.log(tusciasMas);
});

function skaiciuoti() {
   const sum = tusciasMas.reduce((acc, val) => acc + val, 0)
   return sum;
}

// 3 ------------------------------------------------



console.log("sumatorius skaichiuotuvas");
const sumatorius = (...a) => {
  console.log(a);
  let sum = 0;
  for (const b of a) {
    sum += b[0] + b[3];
  }
  return sum;
};
console.log(sumatorius(1, 3, 5, 7, 9, 2, 4, 6, 8, 10));







function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
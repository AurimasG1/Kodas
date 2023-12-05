console.log('Welcome to DOM!');

const h1 = document.querySelector('h1');

h1.style.color = 'skyblue';
h1.style.fontSize = '2rem'; // css rules are camelCased in JS font-size => fontSize
h1.style.textTransform = 'uppercase';
// h1.style.letterSpacing = '-0.3rem';

// let times = 3;

// const si = setInterval(_ => {
//   h1.style.backgroundColor = h1.style.backgroundColor === 'black' ? 'crimson' : 'black', times--; if (times === 0) {
//     clearInterval(si);
//   }
// }, 1000);

// // setInterval(_ => {
// //   h1.style.backgroundColor = h1.style.backgroundColor === 'black' ? 'crimson' : 'black';
// // }, 3000);
// console.log(si);

// setTimeout(_ => {
//   h1.style.backgroundColor = 'pink'
// }, 5000);

setTimeout(_ => {

// h1.innerText = 'Racoon City';
let text = h1.innerText; // getter

// replace Object to Racoon
text = text.replace('OBJECT', 'Racoon');
h1.innerText = text; // setter
}, 3000);

let html = h1.innerHTML; // getter

console.log(html);

h21 = document.querySelectorAll('h2');

h21.forEach((h2, i) => {
  console.log(h2.innerText);
  h2.style.color = 'crimson';
  h2.classList.add('big','red')
  h2.classList.remove('blue');
  h2.setAttribute('href', i);
});

const img = document.querySelector('img');

setInterval(_ => {
  img.setAttribute('src', img.getAttribute('src') === 'rac1.jpg' ? 'rac2.jpg' : 'rac1.jpg');
}, 2000)


// console.log(h21);



// const word = 'Racoon City       ';
// // word letters to array
// const letters = word.split('');
// const spans = letters.map(letter => `<span>${letter}</span>`);
// const line = spans.join('');
// const divLine = document.querySelector('.line');
// divLine.innerHTML = line;
// console.log(line);

// setInterval(_ => {
//   spans.unshift(spans.pop());
//   divLine.innerHTML = spans.join('');
// }, 300)
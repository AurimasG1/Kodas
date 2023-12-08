console.log('hi');

const place1 = document.querySelector('#place1');
const place2 = document.querySelector('#place2');
const place3 = document.querySelector('#place3');
const place4 = document.querySelector('#place4');
const el = '<i>Bebrai yra <strong>jėga!</strong></i>';

place1.innerHTML = '<i>Bebrai yra <strong>jėga!</strong></i>';

place1.innerHTML = el;
place3.innerHTML = el;

// text node
const newElement = document.createElement('i');
const textNode = document.createTextNode('Bebrai yra');
const textNode2 = document.createTextNode(' jėga!');
const boldElement = document.createElement('b');
boldElement.appendChild(textNode2);
newElement.appendChild(textNode);
newElement.appendChild(boldElement);
place2.appendChild(newElement);
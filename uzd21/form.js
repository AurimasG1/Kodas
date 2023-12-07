console.log('Nice Form');


const form = document.querySelector('form');
const button = form.querySelector('button');
const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="color"], input[type="range"]');
const data = {};
// const obj = new Object();
const selects = form.querySelectorAll('select');
const textAreas = form.querySelectorAll('textarea');
const checkbox = form.querySelectorAll('input[type="checkbox"]');
const radio = form.querySelectorAll('input[type="radio"]');

// const set = new Set();
// // const arr = new Array();
// // const arr = []; // short hand for new Array();

// const x = { a: 2 };
// set.add('a');
// set.add('b');
// set.add('c');
// set.add('a');
// set.add('b');
// // set.add({ a: 1 });
// // set.add({ a: 1 });
// // set.add(x);
// // set.add(x);
// // set.add(x);
// // set.add(x);

// // set.delete('b');

// console.log(set.has('a'));
// console.log(set.has({ a: 1 }));
// console.log(set.size);

// for (const item of set) {
//   console.log(item);
// }

// set.forEach(item => {
//   console.log(item);
// });

// const arrSet = [...set];
// arrSet.sort((a, b) => b.localeCompare(a));
// set.clear();
// arrSet.forEach(item => {
//   set.add(item);
// });
// console.log(arrSet);

// const set2 = new Set([1, 2, 3, 4, 5]);
// console.log(set2);

// console.log(set);



button.addEventListener('click', _ => {
  inputs.forEach(input => {
    data[input.name] = input.value;
  });
  selects.forEach(select => {
    data[selects.name] = select.value;
  });
  textAreas.forEach(textarea => {
    data[textarea.name] = textarea.value;
  });
  checkbox.forEach(checkbox => {
    data[checkbox.name] = checkbox.checked ? checkbox.value : '';
  });
  const radionames = new Set();
  radio.forEach(radio => {
    radionames.add(radio.name);
    if (radio.checked) {
      data[radio.name] = radio.value;
    }
  });
  radionames.forEach(name => {
    if (data.hasOwnProperty(name) === false) {
      data[name] = 0;
    }
  });
  console.log(data);
});


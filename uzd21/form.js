console.log('Nice Form');


const form = document.querySelector('form');
const button = form.querySelector('button');
const inputs = form.querySelectorAll('input');
const data = {};
const selects = form.querySelectorAll('select');
const textAreas = form.querySelectorAll('textarea');

button.addEventListener('click', _ => {
  inputs.forEach(input => {
    data[input.name] = input.value;
  });
  selects.forEach(select => {
    data[selects.name] = select.value;
  })
  textAreas.forEach(textarea => {
    data[textarea.name] = textarea.value;
  })
  console.log(data);
})

console.log('Welcome to the world of Objects!');



const animal = {
    name: 'Leo',
    age: 3, // properties (savybe, props)
};

animal.age++;

animal.tail = true; // add new property

animal.name = 'Leo the Lion' // overwrite property

delete animal.tail; // delete property
// delete animal.age;
// delete animal.name;

// console.log(animal, typeof animal);
// console.log('Name:', animal.name);

let five = 5; // primitive value
let fivePlus = five; // copy value

fivePlus++; // increment copy

console.log('Five:', five);
console.log('Five plus:', fivePlus);

const animalPlus = animal; // copy reference

const realAnimal = {...animal}; // copy object spread operator

// const realAnimal = {name: 'Leo', age: 3};

animalPlus.age++; // increment reference

realAnimal.age = 10; // overwrite copy

console.log('Animal:', animal);
console.log('Animal Plus:', animalPlus);


console.log(animal == animalPlus);
console.log('Real Animal:', realAnimal);

const person1 = {
    name: 'John',
    age: 20,
};

const person2 = {
    name: 'John',
    age: 20,
};

console.log(person1 == person2);

console.log(person1, person2);
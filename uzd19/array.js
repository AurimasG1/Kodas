const small = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
const ones = small.filter(item => item == 1); // ------ Filter supranta tik TRUE arba FALSE. Taigi, palieka arba nepalieka.

const farm = [
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "black" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "white" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "brown" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "white and black" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
  { name: "Oink", type: "pig" },
  { name: "Cluck", type: "chicken" },
  { name: "Neigh", type: "horse" },
  { name: "Baa", type: "sheep" },
  { name: "Meow", type: "cat", color: "tricolor" },
  { name: "Woof", type: "dog" },
  { name: "Moo", type: "cow" },
];

const noPigs = farm.filter((item) => item.type != "pig");

console.log(noPigs);

const catsAndDogs = farm.filter(
  (item) => item.type == "cat" || item.type == "dog"
);

console.log(catsAndDogs);

const whiteDogs = farm
  .filter((item) => item.type == "dog")
  .map((item) => ({ ...item, color: "white" }));

console.log(whiteDogs);

const findCat = farm.find((item) => item.type == "cat");

const findCatColor = farm.find((item) => item.type == 'cat')?.color;

console.log(findCat);
console.log(findCatColor);

const dog = { name: "Woof" };

console.log(dog?.name);

let catCount = 0;

const secondCat = farm.find(item => item.type == "cat" && ++catCount == 2);

console.log(secondCat);

let catsDogCounter = 0;

// const first5CatsOrDogs = farm.filter(item => (item.type == 'cat' || item.type == 'dog') && ++catsDogCounter <= 5);

const firstCatsorDogsCounter = farm.filter(
  item => (item.type == "cat" || item.type == "dog") && ++catsDogCounter <= 8);
console.log(firstCatsorDogsCounter);

const animals = [
  { name: 'Fancy', species: 'dog', age: 5 },
  { name: 'Poncho', species: 'dog', age: 10 },
  { name: 'Tom', species: 'cat', age: 3 },
  { name: 'Jerry', species: 'cat', age: 1 },
  { name: 'Bella', species: 'dog', age: 12 },
  { name: 'Charlie', species: 'dog', age: 8 },
  { name: 'Max', species: 'cat', age: 7 }
];

const sumAgeOfAnimals = animals.reduce((sum, item) => sum + item.age, 0);
console.log(sumAgeOfAnimals);

const averageAgeOfAnimals = animals.reduce((sum, item, index, array) => {
  sum += item.age;

  if (index === array.length - 1) {
    return sum / array.length;
  }

  return sum;
}, 0);
console.log(averageAgeOfAnimals);

const maxAgeOfAnimals = animals.reduce((max, item) => max > item.age ? max : item.age, 0);

console.log(maxAgeOfAnimals);

// animals.sort((a, b) => a.age - b.age); // ------------- rusiuoti Skaicius
// animals.sort((a, b) => a.name[1].localeCompare(b.name[1])); // -------------- rusiuoti Stringus
animals.sort((a, b) => {
  if (a.species < b.species) {
    return -1;
  }
  if (a.species > b.species) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
});
console.log(animals);


const dogs = [
  'Big Cow',
  'Small Cow',
  'Big Pig',
  'Small Pig',
  'Angry Chicken',
  'Happy Chicken',
  'Big Sheep',
  'Bad Sheep',
  'Big Goat',
  'White Goat',
  'Black Goat',
  'Tiny Goat',
  'Techno Chicken',
  'Big Dog',
  'Big Horse',
  'Small Horse',
  'Big Duck',
  'Small Duck',
  'Big Turkey',
  'Very Big Turkey',
  'Small Turkey'
 ]

dogs.sort((a, b) => {
  if (a.length < b.length) {
    return 1;
  }
  if (a.length > b.length) {
    return -1;
  }
  return 0;
});
console.log(dogs);
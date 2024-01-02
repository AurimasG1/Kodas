'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! 
      ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;
const flightArr = [];
const getCode1 = str => str.replaceAll('_', ' ').trim().split(';');
const getCode2 = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = getCode1(flight);
  const outPut = `${type.replace('Delayed', '🔴 Delayed')} from ${getCode2(
    from
  )} to ${getCode2(to)} (${time.replace(':', 'h')})`.padStart(45);
  flightArr.push(outPut);
}
console.log(flightArr);

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

/*
const capitalizeName = function (name) {
  const toLower = name.split(' ');
  const namesUpper = [];
  for (const key of toLower) {
    // namesUpper.push(key[0].toUpperCase() + key.slice(1));
    namesUpper.push(key.replace(key[0], key[0].toUpperCase()));
  }
  return namesUpper.join(' ');
};

// const camelCaseFix = function (word) {
//   const vienasM = [];
//   const duM = [];
//   const trysM = [];
//   const keturiM = [];
//   const penkiM = [];
//   const [vienas, du, trys, keturi, penki] = word.split('\n');
//   const sign1 = ['✅'.repeat(1)];
//   const sign2 = ['✅'.repeat(2)];
//   const sign3 = ['✅'.repeat(3)];
//   const sign4 = ['✅'.repeat(4)];
//   const sign5 = ['✅'.repeat(5)];

//   const vienas1 = vienas.toLowerCase().trim();
//   const [vienas2, vienas3] = vienas1.replace('_', ' ').split(' ');
//   vienasM.push([vienas2, vienas3[0].toUpperCase() + vienas3.slice(1)].join(''));
//   const vienasMEnd = vienasM.join().padEnd(19, '.');
//   console.log([vienasMEnd, sign1].join(''));

//   const du1 = du.toLowerCase().trim();
//   const [du2, du3] = du1.replace('_', ' ').split(' ');
//   duM.push([du2, du3[0].toUpperCase() + du3.slice(1)].join(''));
//   const duMEnd = duM.join().padEnd(19, '.');
//   console.log([duMEnd, sign2].join(''));

//   const trys1 = trys.toLowerCase().trim();
//   const [trys2, trys3] = trys1.replace('_', ' ').split(' ');
//   trysM.push([trys2, trys3[0].toUpperCase() + trys3.slice(1)].join(''));
//   const trysMEnd = trysM.join().padEnd(19, '.');
//   console.log([trysMEnd, sign3].join(''));

//   const keturi1 = keturi.toLowerCase().trim();
//   const [keturi2, keturi3] = keturi1.replace('_', ' ').split(' ');
//   keturiM.push([keturi2, keturi3[0].toUpperCase() + keturi3.slice(1)].join(''));
//   const keturiMEnd = keturiM.join().padEnd(19, '.');
//   console.log([keturiMEnd, sign4].join(''));

//   const penki1 = penki.toLowerCase().trim();
//   const [penki2, penki3] = penki1.replace('_', ' ').split(' ');
//   penkiM.push([penki2, penki3[0].toUpperCase() + penki3.slice(1)].join(''));
//   const penkiMEnd = penkiM.join().padEnd(19, '.');
//   console.log([penkiMEnd, sign5].join(''));
// };

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  let counter = 0;
  for (const [i, row] of rows.entries()) {
    counter++;
    const [first, second] = row.toLowerCase().trim().split('_');
    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    const sign = ['✅'.repeat(counter)];
    console.log([outPut.padEnd(19), sign].join(''));
    console.log(`${outPut.padEnd(18)} ${'✅'.repeat(i + 1)}`);
  }
});

underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

/*
/////////////////////////////////////////////////////////////////
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName.toUpperCase(), `mr.${lastName}`);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const toLower = name.split(' ');
  const namesUpper = [];
  for (const key of toLower) {
    // namesUpper.push(key[0].toUpperCase() + key.slice(1));
    namesUpper.push(key.replace(key[0], key[0].toUpperCase()));
  }
  return namesUpper.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('jonas schmedtmann'));

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(43534535));
console.log(maskCreditCard(4366995943534535));
console.log(maskCreditCard('4324366995943534535'));

// Repeat
const message2 = 'Bad weather...All departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

////////////////////////////////////////////
// Working with strings - part 2
const airLine2 = 'TAP Air Portugal';

console.log(airLine2.toLowerCase());
console.log(airLine2.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixName = function (name) {
  const toLower = name.toLowerCase();
  const fixed = toLower[0].toUpperCase() + toLower.slice(1);
  return fixed;
};
console.log(fixName('aBRomASZDFkfkdk'));

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const fixEmail = function (email1, email2) {
  const loginEmail = email2.toLowerCase().trim();
  return loginEmail === email1 ? loginEmail : console.log('Did not work');
};
console.log(fixEmail('hello@jonas.io', 'HeLLo@jonAs.io'));

// replacing

const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '@').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/////////////////////////////////////
// Working with Strings - Part 1
const airLine = 'TAP Air Portugal';
const plane1 = 'A320';

console.log(plane1[0]);
console.log(plane1[1]);
console.log(plane1[0]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.indexOf('r'));
console.log(airLine.indexOf('portugal'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B AND E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log(`Your seat is in the middle of row ${seat.slice(0, -1)}`)
    : console.log(`Not middle`);
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

// CODING CHALLENGER #3
//
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const gameTime = [...gameEvents.keys()].pop();
const gameTime2 = [...gameEvents.keys()];

console.log(
  `An event happened, on average, every ${
    gameTime2[gameTime2.length - 1] / gameEvents.size
  } minutes`
);
console.log(
  `An event happened, on average, every ${gameTime / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}



//


const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again'],
]);
console.log(question);


// MAPS
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  typeof key === 'number' ? console.log(`Answer ${key}: ${value}`) : null;
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
// Option 1
console.log(question.get(question.get('correct') === answer));
// Option 2
answer === 3
  ? console.log(question.get(true))
  : console.log(question.get(false));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/////////////////////////////////////////////////
// Maps: Fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/////////////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('aurimasgedvilas').size);

/*

// 1.

const oddAvg = game.scored.entries();

for (const [index, value] of oddAvg) {
  console.log(`Goal ${index + 1}: ${value} `);
}

// 2.
const odds1 = Object.entries(game.odds);
const { team1, team2 } = game;
const oddValues = Object.values(game.odds);

let average = 0;

// Option 1
// for (let i = 0; i < oddValues.length; i++) {
//   average += oddValues[i];
// }
// average = average / oddValues.length;
// console.log(average);

// Option 2
for (const key of oddValues) average += key;

average /= oddValues.length;
console.log(average);

// 3.
for (const [key, value] of odds1) {
  // key === 'x'
  //   ? console.log(`Odd of draw ${value}`)
  //   : console.log(`Odd of victory ${key === 'team1' ? team1 : team2} ${value}`);

  // if (key === 'x') {
  //   console.log(`Odd of draw ${value}`);
  // } else {
  //   console.log(`Odd of victory ${key === 'team1' ? team1 : team2} ${value}`);
  // }

  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr} ${value}`);
}

// 4. BONUS
const scorers = {};
for (const player of game.scored) {
  console.log(scorers);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// 3.

// 4.

/*
// const { start } = require('repl');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};



// Property names
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

// Property values

const values = Object.values(openingHours);
// console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/////////////////////////////////////////////////////////
// Optional chaining
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining .?
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'none';
  console.log(`${day} opening hour ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users2 = [];

console.log(users[0]?.name ?? 'User array empty');
console.log(users2[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu1) {
  console.log(item);
}

for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

// 1.
const [players1, players2] = game.players;
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

// 2.
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const playersFinal1 = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);

// 6.
// const printGoals = function(...players) {
const printGoals = function (...players) {
  let sum = 0;
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
    sum++;
  }
  console.log(`${sum} goals were scored`);
};

printGoals(...players1);
printGoals(...players2);
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 2 is more likely to win`);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('------- OR -------');
// Use ANY data type, return ANY data type, short-circuiting (short circuit evaluation)
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------- AND -------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// 1) Destructuring

// SPREAD, because on RIGHT side of = operator
const arr1 = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = operator
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x1 = [23, 5, 7];
add(...x1);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

const arr2 = [7, 8, 9];
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr2];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu3);

// Iterables: arrays, strings, maps, set. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // Spread operators works only as arguments into Function or when creating an array

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient number 1?"),
  // prompt("Let's make pasta! Ingredient number 2?"),
  // prompt("Let's make pasta! Ingredient number 3?"),
];
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Destructuring objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours5, categories } = restaurant;
console.log(name, openingHours5, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a2 = 111;
let b2 = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a2, b2 } = obj);
console.log(a2, b2);

// nested objects
const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c3 = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (account) {
  containerMovements.innerHTML = '';
  // .textContent = 0
  account.movements.forEach((item, i) => {
    const type = item > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${item}€</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, item) => acc + item, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = account => {
  const incomes = account.movements
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(item => item > 0)
    .map(item => (item * account.interestRate) / 100)
    .filter((item, i, arr) => {
      return item >= 1;
    })
    .reduce((acc, item) => acc + item, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = items =>
  items.forEach(
    item =>
      (item.username = item.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );

const updateUI = account => {
  displayMovements(account);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};
createUsernames(accounts); // stw
// console.log(accounts);

// Event handler
let currentAccount;

btnLogin.addEventListener('click', e => {
  // Prevent form from submitting
  e.preventDefault();
  // Validate login
  currentAccount = accounts.find(
    item => item.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Clear input fields, lose focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    containerApp.style.opacity = 100;
    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('no login');
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    item => item.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur() && inputTransferTo.blur();
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    console.log('transfer valid');
  } else {
    console.log('trasnfer fail');
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  // check credentials
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Delete current account
    const index = accounts.findIndex(
      item => item.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
    inputCloseUsername.blur() && inputClosePin.blur();
    labelWelcome.textContent = 'Log in to get started';
  }

  console.log('close clicked');
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2))
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));

// for (const item of movements) {
for (const [i, item] of movements.entries()) {
  item > 0
    ? console.log(`Movement ${i + 1}: You deposited ${item}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(item)}`);
}

console.log(`------- FOR EACH --------`);

movements.forEach((item, i) =>
  item > 0
    ? console.log(`Movement ${i + 1}: You deposited ${item}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(item)}`)
);
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


currencies.forEach((item, i) => {
  console.log(`${i}: ${item}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(item => {
  console.log(`${item}`);
});

// Coding Challenge #1
/////////////////////////////////////////////////////////////////////
const checkDogs = function (item1, item2) {
  const noCatsKate = item1.slice(1, 3);
  const puppiesOrAddults = [];
  // const puppiesOrAddults = noCatsKate.concat(item2);
  puppiesOrAddults.push(...noCatsKate, ...item2);
  puppiesOrAddults.forEach((item, i) => {
    item >= 3
      ? console.log(`Dog ${i + 1} is an Adult and is ${item} years old`)
      : console.log(
          `Dog ${i + 1} is ${item} years old and is still a puppy 🐶`
        );
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsJuali2 = [9, 16, 6, 8, 3];

const dogsKate = [4, 1, 15, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJuali2, dogsKate2);

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const eurToUsd = 1.1;
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements2.map(function (item) {
  return item * eurToUsd;
  // return 23;
});

const movementsUSD2 = movements2.map(item => item * eurToUsd);
console.log(movements2);
console.log(movementsUSD);
console.log(movementsUSD2);
const movementsUSDfor = [];
for (const item of movements2) {
  movementsUSDfor.push(item * eurToUsd);
}
console.log(movementsUSDfor);

const movements2Descriptions = movements2.map(
  (item, i) =>
    `Movement ${i + 1}: You ${item > 0 ? 'deposited' : 'withdrew'} ${item}`
);
console.log(movements2Descriptions);

const deposits = movements.filter(item => item > 0);
console.log(movements);
console.log(deposits);
const depositsFor = [];
for (const item of movements) if (item > 0) depositsFor.push(item);
console.log(depositsFor);
const withdrawals = movements.filter(item => item < 0);
console.log(withdrawals);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, item, i) {
//   console.log(
//     `Iteration ${i}: ${acc} ${item > 0 ? `+ ${item}` : `- ${Math.abs(item)}`} `
//   );
//   return acc + item;
// }, 0);

const balance = movements.reduce((acc, item, i) => {
  console.log(
    `Iteration ${i}: ${acc} ${item > 0 ? `+ ${item}` : `- ${Math.abs(item)}`} `
  );
  return acc + item;
}, 0);

console.log(balance);
console.log(movements);

let balance2 = 0;
for (const item of movements) balance2 += item;
console.log(balance2);

// Maximum value

const maxValue = movements.reduce(
  (acc, item) => (acc > item ? acc : item),
  movements[0]
);
console.log(maxValue);

const minValue = movements.reduce(
  (acc, item) => (acc < item ? acc : item),
  movements[0]
);
console.log(minValue);
const checkDogs = function (item1, item2) {
  const noCatsKate = item1.slice(1, 3);
  const puppiesOrAddults = [];
  // const puppiesOrAddults = noCatsKate.concat(item2);
  puppiesOrAddults.push(...noCatsKate, ...item2);
  puppiesOrAddults.forEach((item, i) => {
    item >= 3
      ? console.log(`Dog ${i + 1} is an Adult and is ${item} years old`)
      : console.log(
          `Dog ${i + 1} is ${item} years old and is still a puppy 🐶`
        );
  });
};


// Option 1
// const calcAverageHumanAge = ages => {
//   const humanAges = ages.map(item => (item <= 2 ? item * 2 : item * 4 + 16));
//   const adults = humanAges.filter(item => item >= 18);
//   const average = adults.reduce((acc, item) => acc + item, 0) / adults.length;
//   return average;
// };

// Option 2
const calcAverageHumanAge = ages =>
  ages
    .map(item => (item <= 2 ? item * 2 : item * 4 + 16))
    .filter(item => item >= 18)
    .reduce((acc, item, i, filtered) => acc + item / filtered.length, 0);

const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
// const dogsJuali2 = [9, 16, 6, 8, 3];

const dogsKate = [16, 6, 10, 5, 6, 1, 4];
// const dogsKate2 = [10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(dogsJulia));
console.log(calcAverageHumanAge(dogsKate));

//
// PIPELINE
const eurToUsd = 1.1;
// Option 1
// const totalDepositsUSD = movements
//   .filter((item, i, arr) => {
//     console.log(arr);
//     return item > 0;
//   })
//   .map((item, i, arr) => {
//     console.log(arr);
//     return item * eurToUsd;
//   })
//   .reduce((acc, item, i, arr) => {
//     console.log(arr);
//     return acc + item;
//   }, 0);

// Option 2
const totalDepositsUSD = movements
  .filter(item => item > 0)
  .map(item => item * eurToUsd)
  .reduce((acc, item) => acc + item, 0);

//////////////////////

console.log(totalDepositsUSD);
const firstWithdrawal = movements.find(item => item < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find(item => item.owner === 'Jessica Davis');
console.log(account);

const account11 = [];

for (const [i, acc] of accounts.entries()) {
  acc.owner === 'Jessica Davis' ? account11.push(acc) : null;
}

console.log(account11);
*/

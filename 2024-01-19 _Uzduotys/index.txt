console.log('hi');

// 1. ---------------------------------------------
const skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const suma = skaiciuMasyvas.reduce((acc, item) => item + acc, 0);
console.log(suma);

// 2. ---------------------------------------------
const a = 2;
const b = 2;

const lygina = function (a, b) {
	if (a > b) {
		return console.log(`${a} yra didesnis už ${b}`);
	} else if (a < b) {
		return console.log(`${b} yra didesnis už ${a}`);
	} else return console.log(`${a} ir ${b} yra lygūs`);
};

lygina(a, b);

// 3. ---------------------------------------------
const factorialas = function (n) {
	let answer = 1;
	if (n === 0 || n === 1) {
		return answer;
	} else if (n > 1) {
		for (let i = n; i >= 1; i--) {
			answer = answer * i;
		}
		return answer;
	} else {
		return `number has to be positive`;
	}
};

console.log(factorialas(5));

const factorialas2 = function (n) {
	let atsakymas = n;
	if (n === 0 || n === 1) {
		return 1;
	}
	while (n > 1) {
		n--;
		atsakymas = atsakymas * n;
	}

	return atsakymas;
};

console.log(factorialas2(0));
console.log(factorialas2(5));

// 4 + 5 ????. ---------------------------------------------
const stringas = 'as nenoriu eiti i mokykla';

const zodziuKiekis = function (string) {
	const stringas = string.split(' ');
	return stringas.length;
};
console.log(zodziuKiekis(stringas));

const reverseString = function (string) {
	const stringas = string.split(' ').reverse().join(' ');
	return stringas;
};

const reverseString2 = function (string) {
	let naujasStringas = '';
	for (let i = string.length - 1; i >= 0; i--) {
		naujasStringas += string[i];
	}
	return naujasStringas;
};

console.log(reverseString(stringas));
console.log(reverseString2(stringas));

// 6. ---------------------------------------------
const skaiciuMasyvas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tikLyginiai = function (masyvas) {
	const atsakymas = [...masyvas].filter(sk => (sk % 2 === 0 ? sk : null));
	return atsakymas;
};

console.log(tikLyginiai(skaiciuMasyvas2));

// 7. ---------------------------------------------

function convertMinutesToTime(minutes) {
	if (isNaN(minutes) || minutes < 0) {
		return 'Neteisingas įvesties formatas';
	}

	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	const hoursText = hours > 0 ? hours + ' val. ' : '';
	const minutesText = remainingMinutes > 0 ? remainingMinutes + ' min.' : '';

	return hoursText + minutesText;
}

// Pavyzdys naudojant funkciją:
const inputMinutes = 125;
const convertedTime = convertMinutesToTime(inputMinutes);
console.log(`${inputMinutes} minutės yra ${convertedTime}`);

// 8. ---------------------------------------------
const arPirminis = function (n) {
	const sakninta = Math.sqrt(n);
	for (let i = 2; i <= sakninta; i++) {
		if (n % i === 0) return false;
	}
	return true;
};

console.log(arPirminis(83));

// 9. ---------------------------------------------

document.querySelector('.butonas').addEventListener('click', _ => {
	const ivesta = document.querySelector('.tekstas').value;
	alert(`Sveiki ${ivesta}`);
});

// 10. ---------------------------------------------

document.getElementById('changeColorBtn').addEventListener('click', changeColor);
document
	.getElementById('changeFontSizeBtn')
	.addEventListener('click', changeFontSize);

function changeColor() {
	const body = document.body;
	const currentColor = getComputedStyle(body).backgroundColor;
	const newColor = getRandomColor();

	if (currentColor !== newColor) {
		body.style.backgroundColor = newColor;
	} else {
		changeColor(); // Call recursively until a different color is generated
	}
}

function changeFontSize() {
	const body = document.body;
	const currentSize = parseInt(getComputedStyle(body).fontSize);
	const newSize = currentSize < 30 ? currentSize + 2 : 16;

	body.style.fontSize = newSize + 'px';
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

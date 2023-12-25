// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const tempAmplitude = calcTempAmplitude(temperatures);
console.log(tempAmplitude);
// New one

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const tempAmplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(tempAmplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND
  console.table(measurement);
  //   console.log(measurement.value);10
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const tempAmplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(tempAmplitudeBug);


const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]}c in ${i + 1} days`;
    arr[i] = `... ${arr[i]}c in ${i + 1} days `;
    if (i === arr.length - 1) {
      str += ` ... ${arr[i]}c in ${i + 1} days ...`;
      arr[i] = ` ... ${arr[i]}c in ${i + 1} days ...`;
    }
  }

  //   return arr;
  return str;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));

*/

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// if (x === 23) console.log('x is 23');

// const calcAge = birthYear => 2025 - birthYear;

// console.log(calcAge(2004));

const temperatures1 = [3 - 2, -6, -1, 'error', 9, 13, 17, 15, 9, 5];

const temperatures2 = [2, -7, 'error', 12, 0, 3, 10];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let tempMax = temps[0];
  let tempMin = temps[0];

  for (let i = 1; i < temps.length; i++) {
    let current = temps[i];
    if (current > tempMax) tempMax = current;
    if (current < tempMin) tempMin = current;
  }

  console.log(tempMax, tempMin);

  return tempMax - tempMin;
};

const amplitude = calcTempAmplitude(temperatures1, temperatures2);
console.log(amplitude);

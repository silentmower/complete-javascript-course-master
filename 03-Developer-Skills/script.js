// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// if (x === 23) console.log('x is 23');

// const calcAge = birthYear => 2025 - birthYear;

// console.log(calcAge(2004));

// const temperatures1 = [3 - 2, -6, -1, 'error', 9, 13, 17, 15, 9, 5];

// const temperatures2 = [2, -7, 'error', 12, 0, 3, 10];

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let tempMax = temps[0];
//   let tempMin = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     let current = temps[i];
//     if (current > tempMax) tempMax = current;
//     if (current < tempMin) tempMin = current;
//   }

//   console.log(tempMax, tempMin);

//   return tempMax - tempMin;
// };

// const amplitude = calcTempAmplitude(temperatures1, temperatures2);
// console.log(amplitude);

// let num = Number(prompt('podaj liczbe'));
// let promptNumbers = [];

// while (num !== 0) {
//   promptNumbers.push(num);
//   num = Number(prompt('podaj liczbe'));
// }

// console.log(promptNumbers);

// let numP = prompt("podaj liczbe: ");

// for(let i = 0; i < numP; i++){
//   console.log("hejka");
// }

//CHALLENGE 1
// const temperatures1 = [17, 21, 23];
// const temperatures2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = str + ` ${arr[i]} in ${i + 1} days .... `;
//   }

//   console.log('...' + str);
// };

// printForecast(temperatures1);
// printForecast(temperatures2);

//CHALLENGE 2

const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTracking = function (arr) {
  let sum = 0;
  let workedDays = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > 0) workedDays += 1;
    if(arr[i] > max)max = i;
  }

  console.log('Total hourse worked:' + sum);
  console.log('Averange daily hours:' + sum / arr.length);
switch(max){
    case 0:
        console.log("The day with the most hours worked: Monday");
        break;
        case 1:
        console.log("The day with the most hours worked: Tuesday");
        break;
        case 2:
        console.log("The day with the most hours worked: Wednesday");
        break;
        case 3:
        console.log("The day with the most hours worked: Thursday");
        break;
        case 4:
        console.log("The day with the most hours worked: Friday");
        break;
        case 5:
        console.log("The day with the most hours worked: Saturday");
        break;
        case 6:
        console.log("The day with the most hours worked: Sunday");
        break;

}
  console.log('Number of days worked:' + workedDays);
  if (sum >= 35) crossOriginIsolated.log('The week was full-time');
};

timeTracking(data);

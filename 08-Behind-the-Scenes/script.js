// "use strict";

// // Scoping

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     let output2 = "";
//     firstName = "Tomek";
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       output2 = `Oh, and you're a millenial , ${firstName}`;
//     } else {
//       output2 = `Oh, and you are not a millenial , ${firstName}`;
//     }
//     console.log(output2);
//   }
//   printAge();
//   return age;
// }

// let firstName = "Filip";
// calcAge(2004);

// // hosting and TDZ

// // variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Filip";
// let job = "programmer";
// const year = 2004;

// // functions

// // console.log(addDelc(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrrow(2, 3));
// // function addDelc(a, b) {
// //   return a + b;
// // }

// // const addExpr = function (a, b) {
// //   return a + b;
// // };

// // const addArrrow = (a, b) => 1 + b;

// if (!numProducts) deleteshoppingCart();

// var numProducts = 10;
// function deleteshoppingCart() {
//   console.log("All products deleted!");
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // this keyword

// console.log(this);

// const calcAge2 = function (birthYear) {
//   const age2 = 2025 - birthYear;
//   console.log(this);
// };

// calcAge2(1990); //undefined

// const calcAge2Arrow = (birthYear) => {
//   const age2Arrow = 2025 - birthYear;
//   console.log(this);
// };

// calcAge2Arrow(1990); //widnow

// const filip = {
//   year: 2004,
//   calcAge: function () {
//     console.log(this); //filip object
//     console.log(2025 - this.year); //21
//   },
// };

// filip.calcAge();

// const gabi = {
//   year: 2006,
// };
// gabi.calcAge = filip.calcAge; //method borrowing
// gabi.calcAge();

// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

console.log("Before:", jessica1);
console.log("After:", marriedJessica);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  familiy: ["Alice", "Bob"],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push("Mary");
jessicaClone.familiy.push("John");

console.log("Original:", jessica);
console.log("Clone:", jessicaClone);

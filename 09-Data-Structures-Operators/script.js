"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
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
  },

  order: function (starterInex, mainIndex) {
    return [this.starterMenu[starterInex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({time = '19:00', addres, mainIndex =0, starterIndex=0}) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },
};

// Destructing objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant; //[]=default values
console.log(menu, starter);

let a = 111;
let b = 777;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: `23:00`,
  addres: "Via del Sole 7",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  time: `12:00`,
  addres: "KaufStrasse 7",
});
//Destructing arrays

// const arr = [1, 2, 3, 4, 5];
// const [a, b, c] = arr;
// console.log(a, b, c);

// const arr2 = [1, 2, [3, 4]];
// const [n, , m] = arr2;
// console.log(n, m);
// const [g, , [h, i]] = arr2;
// console.log(g, h, i);

// let [x, , y] = restaurant.categories;

// console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);

// const orderFn = function (arr, starter, main) {
//   return `You ordered ${arr.starterMenu[starter]} from starter menu and ${arr.mainMenu[main]} from main menu`;
// };

// console.log(orderFn(restaurant, 1, 1));

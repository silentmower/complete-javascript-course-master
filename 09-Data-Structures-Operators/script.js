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

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enchanted object literals
  openingHours,

  order: function (starterInex, mainIndex) {
    return [this.starterMenu[starterInex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "19:00",
    addres,
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`You choose pasta with ${ing1}, ${ing2} and ${ing3} `);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// looping objets

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day} `;
}

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? "Metod does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Metod does not exist");

// const users = [
//   {name: "Filip", email: "hehehe@gmail"}
// ];

// console.log(users[0]?.name ?? 'User array empty')
// // Looping arrays (cant continue and brake)

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// Logical assigment operator
// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Pizzna",
//   owner: "Giovani rossi",
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && "<ANNONYMOUS>";

// rest2.owner &&= "<ANNONYMOUS>";

// console.log(rest1);
// console.log(rest2);
// // Nullish ooerator (null and undefined, NOT 0 or '')
// restaurant.numGuest = 0;
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);//0

// // Short circuting
// console.log(3 || "Filip"); //3
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log("" || "Filip"); //Filip

// console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello

// restaurant.numGuest = 0;
// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1); //10

// const guests2 = restaurant.numGuest || 10;
// console.log(guests2); //10

// console.log(0 && "Filip"); //0
// console.log(7 && "Filip"); //Filip

// console.log("Hello" && 23 && null && "Filip"); //null

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushroooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

//Spread operator
// const arr = [3, 5, 7];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = "Filip";
// const letters = [...str, "", "Z."];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1898, ...restaurant, founder: "Fredrich" };
// newRestaurant.name = "Roma Passion";
// console.log(newRestaurant);

// Rest patterns and paramaters

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 3, 1, 10, 9);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

// Destructing objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant; //[]=default values
// console.log(menu, starter);

// let a = 111;
// let b = 777;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: `23:00`,
//   addres: "Via del Sole 7",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   time: `12:00`,
//   addres: "KaufStrasse 7",
// });
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

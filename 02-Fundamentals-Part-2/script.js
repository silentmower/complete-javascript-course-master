// 'use strict';

// const hasDriersLicence = true;

// // if (hasDrierLicence) console.log("can drive");
// if (hasDriersLicence) console.log("can drive");

// // const interface = "music";

// function fruitProcessor(apples, oranges){
//     const jucie = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return jucie;
// }

// const appleOrangeJucie = fruitProcessor(10, 2);
// console.log(appleOrangeJucie);

// const appleOrangeJucie2 = fruitProcessor(1, 3);
// console.log(appleOrangeJucie2);

//declaration

// function calcAge1(birthYear){
//     return 2025 - birthYear;
// }

// const age1 = calcAge1(1995);

// const calcAge2 = function(birthYear){
//     return 2025 - birthYear;
// }

// const age2 = calcAge2(1995);

// console.log(age1, age2);


// const calcAge3 = birthYear => 2025 - birthYear;

// console.log(calcAge3(1995));


// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return `${firstname} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1995, "Filip"));

// const cutFruit = function(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     const jucie = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of noranges.`;
//     return jucie;
// }

// console.log(fruitProcessor(2,3));

// 

// const filip = {
//     firstName: 'Filip',
//     birthYear: 2004,
//     hobby: 'proggraming',

//     calcAge: function(){
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     }
// }

// console.log(filip);

// filip.calcAge();
// console.log(`Hello, i'm ${filip.firstName}, ${filip.age} years old ${filip.hobby}`);

const friends=['Janek', 'Tomek', 'Piotrek'];
const typeOfFriends = [];

for(let i = 0; i < friends.length; i++){
    console.log(friends[i]);
    typeOfFriends[i] = typeof(friends[i]);
    console.log(typeOfFriends[i]);
}


let dice = Math.floor((Math.random() * 6) +1);

while(dice !== 6){
    console.log(`you diced a ${dice}`);
    dice = Math.floor((Math.random() * 6) +1);
    if(dice === 6) console.log(`U got 6, it's going to end`);

}
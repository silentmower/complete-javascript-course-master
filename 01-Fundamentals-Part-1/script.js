// let js = "amazing";

// console.log(40+8+23-10);

// console.log("Janek");
// console.log(23);

// let firstName = "Janek"
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //coment

// let amountOfMoney = 1000;
// console.log(typeof amountOfMoney);

// amountOfMoney = "tausend";
// console.log(typeof amountOfMoney);

// amountOfMoney = false;
// console.log(typeof amountOfMoney);

// console.log(typeof null);

// const birthYear = 2004;
// console.log(birthYear);

// birthYear = 2000; 

// let now = 2025;
// const ageJanek = now - 2003;
// const ageAnia = now - 2010;
// console.log(ageJanek, ageAnia);

// console.log(ageJanek * 2, ageAnia / 3);

// const firstName = 'Janek';
// const lasteName = 'Siemaneczko';
// console.log(firstName + " " + lasteName);

// let x = 10 +5;
// x += 10;
// console.log(x);
// x /= 20;
// x++;
// console.log(x);

// console.log(ageJanek > ageAnia);
// console.log(ageAnia >= 18);

// const isFullYear = ageAnia >= 18;

// const firstName = "Janek";
// const job = "teacher";
// const birthYear = 1995;
// const year = 2025;

// const janek = "I'm " + firstName + ", a " + 
// (year - birthYear) + ' years old ' + job + ' !';

// console.log(janek);

// const newJanek = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
//  console.log(newJanek);

// const age = 10;


// if(age>=18) {
//     console.log("Janek can start driving license");
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Janek is too young. He must wait another ${yearsLeft} years`);
// };



// const promptNumber = Number(prompt("What is your favourite number?"));

// console.log(promptNumber);

// if(promptNumber === 7) console.log("7 is great number!");
// else if(promptNumber === 9) console.log("9 is great number!");
// if(promptNumber === 3) console.log("3 is great number!");
// else console.log(`u choosed number:${promptNumber}`);

// if(promptNumber !== 7) console.log("you should choos 7!");


// const hasDriverLicense = true;
// const hasGoodVision = true;
// const isTired = true;

// if(hasDriverLicense && hasGoodVision && !isTired) console.log("can drive");
// else console.log("CAN'T DRIVE");


// const day = prompt("What day is today?");

// switch(day){
//     case '1':
//         console.log("1");
//         break;
//     case '2':
//             console.log("2");
//             break;
//     case '3':
//     case '4':
//             console.log("3 or 4");
//             break;
//     default:
//         console.log("its not 1 2 3 or 4");

// }


const bill = 250;

const tip = bill >=50 && bill <= 300 ? bill*0.15 : bill*0.1;

console.log(`bill:${bill} tip: ${tip} bill+tip: ${bill+tip}`);
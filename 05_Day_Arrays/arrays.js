// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// const empty = [];

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(`${arr.length}`);

// let firstCountry = countries[0];
// console.log(`${firstCountry}`);

// let middleCountryIndex = Math.floor(countries.length / 2);
// middleCountry = countries[middleCountryIndex];
// console.log(`${middleCountry}`);

// let lastCountryIndex = countries.length - 1;
// lastCountry = countries[lastCountryIndex];

// console.log(`${lastCountry}`);

// // const webTechsSorted = webTechs.sort();
// // console.log(`${webTechs}`);

// console.log(`${webTechs.slice(3)}`);
// let array1 = require("./countries.js");
// let array2 = require("./webTechs.js");

// console.log(`${array1.countries}`);
// console.log(`${array2.webTechs}`);

// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// let words = text.split(/[., \s]+/);
// console.log(words);
// console.log(words.length - 1);

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// shoppingCart.unshift("Meat");

// shoppingCart.push("Sugar");

// shoppingCart.splice(2, 2, "Green Tea");

// console.log(shoppingCart);

// if (array1.countries.includes("Ethiopia") == true) {
//   console.log(`ETHIOPIA`);
// } else {
//   array1.countries.push("Ethiopia");
// }
// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];

// const fullStack = [...frontEnd, ...backEnd];

// console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

console.log(ages);

const firstAge = ages[0];
console.log(firstAge);

const middleAge = ages.length / 2;
console.log(ages[middleAge]);

const lastAge = ages.length - 1;
console.log(ages[lastAge]);

const averageAge = ages.reduce((a, b) => a + b) / ages.length;
console.log(averageAge);

let min = Math.min(...ages);

let max = Math.max(...ages);
console.log(ages[0] + "-" + ages[ages.length - 1]);

console.log(min);

console.log(max);

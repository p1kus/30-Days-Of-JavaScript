// let sumEven = 0;
// let sumOdd = 0;
// let newArr = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// newArr.push(sumEven);
// newArr.push(sumOdd);

// console.log(newArr);

// const arr = [];

// for (let i = 0; arr.length <= 4; i++) {
//   let randomNumber = Math.floor(Math.random(9 - 0) * 10);
//   if (arr.indexOf(randomNumber) === -1) {
//     arr.push(randomNumber);
//   }
// }

// console.log(arr);

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (let i = 0; i < fullStack.length; i++) {
//   console.log(fullStack[i]);
// }
// let arr = [];
// let randomLength = Math.floor(Math.random() * (10 - 4) + 4);
// let possible = "abcdef0123456789";

// let text = "";
// for (let i = 0; i < 6; i++) {
//   text += possible.charAt(Math.random() * possible.length);
// }
// console.log(`#${text}`);

// let randColor = Math.floor(Math.random() * (256 - 0));
// let text = "";
// for (let i = 0; i < 3; i++) {}
// console.log(`rgb(${randColor},${randColor},${randColor})`);

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "ICELAND",
  "JAPAN",
  "KENYA",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
// const countriesShort = [
//   "ALB",
//   "BOL",
//   "CAN",
//   "DEN",
//   "ETH",
//   "FIN",
//   "GER",
//   "HUN",
//   "IRE",
//   "JAP",
//   "KEN",
// ];
// let newCountries = [];
// let newNewCountries = [];
// for (let i = 0; i < countries.length; i++) {
//   newCountries.push([countries[i]]);
//   newCountries[i].push(countriesShort[i]);
//   newCountries[i].push(countries[i].length);
// }
// console.log(newCountries);
// let template = "LAND";
// let newArr = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries.findIndex((e) => e.includes(template))) {
//     // ZNAJDŹ CZY ISTNIEJE "LAND" W TABELI COUNTRIES, INDEXOF NIE DZIAŁAŁ Z SUBSTRINGIEM
//     console.log(countries.filter((e) => e.includes(template)));
//     // ZWROC NOWY ARRAY ZE ZNALEZIONYMI ELEMENTAMI
//     break;
//   } else {
//     console.log(`No countries with land`);
//   }
// }

// console.log(newArr);

// webTechs.sort((a, b) => b.length - a.length);
// console.log(webTechs[0].length);
let webTechsLengths = [];
let newWebTechs = [];

for (let i = 0; i < webTechs.length; i++) {
  webTechsLengths.push([webTechs[i].length]);
  webTechsLengths[i].unshift(webTechs[i]);
  // console.log();
}

console.log(webTechsLengths);

for (let i = 0; i < mernStack.length; i++) {
  // console.log(mernStack.map((e) => e.charAt(0)));
}

let newArr = mernStack.map((e) => e.charAt(0)).toString();
console.log(newArr.replace(/[, +]g/));

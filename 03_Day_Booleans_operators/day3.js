let firstName = `Piotr`;
let lastName = `Popiolek`;
let country = `Poland`;
let city = `Lublin`;
let isMarried = false;

// console.log(typeof "10" == typeof 10);

// console.log(parseInt("9.8") == 10);

// console.log(4 == "4");

let python = `python`;

let jargon = `jargon`;

// console.log(python.length != jargon.length);

const now = new Date();
const year = now.getFullYear();
let month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay();
const hour = now.getHours();
const minute = now.getMinutes();
const minutes = now.getTime();

month <= 9 ? (month = `0${month}`) : month;
// console.log(now);
// console.log(year);
// console.log(month);
// console.log(date);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(minutes);

// let base = prompt("Enter base", "");
// let height = prompt("Enter height", "");

// let area = 0.5 * base * height;
// console.log(area);

firstName.length > 7 ? console.log(`Long`) : console.log(`short`);

firstName.length > lastName.length
  ? console.log(`first name longer`)
  : console.log(`last name longer`);

let myAge = 100;
let yourAge = 12;

console.log(`${myAge}  ${yourAge}`);

let secondsLived = new Date().getTime();

console.log(`${year}-${month}-${day} ${hour}:${minute}`);

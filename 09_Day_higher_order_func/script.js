// import { countries } from "./countries_data.mjs";

// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }

// console.log(cube(callback, 5));

const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "DPRK",
  "Ethiopia",
];

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const sumArray = (arr) => {
  let sum = 0;
  const callback = function (e) {
    sum += e;
  };
  arr.forEach(callback);
  return sum;
};

// console.log(sumArray(numbers));

const skills = ["HTML", "Javascript", "CSS", "SASS", "MongoDB"];

const toUpper = (arr) => {
  let newArr = [];
  const callback = function (e) {
    return e.toUpperCase();
  };
  arr.forEach(callback);
  return arr;
};

// console.log(toUpper(skills));

const logSomething = () => {
  console.log(`first`);
};

// setInterval(logSomething, 2000);

const skillsContainingS = skills.filter((skills) => skills.includes("S"));

// console.log(skillsContainingS);

// console.log(
//   numbers.reduce((acc, current) => {
//     //   console.log(`acc: ${acc}`);
//     //   console.log(`current: ${current}`);
//     return acc + current;
//   })
// );

// console.log(sum);

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
// console.log(users); // sorted ascending

// ForEach - Map, ForEach działa na jednym tym samym arrayu i go modyfikuje, Map przypisuje wartości do nowej zmiennej, poza tym działa tak samo jak forEach
// Filter - zwraca NOWY array, podobnie jak z Map, filtrując przy tym elementy zgodnie z funkcją wpisaną w metodzie.
// Reduce - Nie zwraca nowego Arraya, accumulator - "zbiera" po kolei wartości wykonując operacje z drugim parametrem czyli CurrentValue.
//          Dla dodawania, np. [1,2,3,4,5], accumulator idzie - 1 -> 3 -> 6 -> 10, currentValue idzie - 2 -> 3 -> 4 -> 5, przy operacji accumulator + currentValue
//          Daje nam to wynik: 15

const callback = (e) => {
  console.log(e.toUpperCase());
};
const callback2 = (e) => {
  return e.toUpperCase();
};
const callback3 = (e) => {
  return e.toLowerCase().includes("javascript");
};
const callback4 = (a, b) => {
  return a * b;
};

// console.log(skills.forEach(callback));

// const newSkills = skills.map(callback2);
// console.log(newSkills);

// const filteredSkills = skills.filter(callback3);
// console.log(filteredSkills);

// console.log(numbers.reduce(callback4));

// countries.forEach((country) => {
//   console.log(country.name);
// });

// names.forEach((name) => {
//   console.log(name);
// });
// numbers.forEach((number) => {
//   console.log(number);
// });

const newNames = names.map((name) => {
  return name.toUpperCase();
});
// console.log(newNames);

const countriesLength = countries.map((country) => {
  return country.length;
});

// console.log(countriesLength);

const squaredNumbers = numbers.map((number) => {
  return number * number;
});

// console.log(squaredNumbers);

const productPrices = products.map((product) => {
  return product.product + ": " + product.price;
});

// console.log(productPrices);

const landCountries = countries.filter((country) => {
  return country.toLowerCase().includes("land");
});
// console.log(landCountries);

const lessThan6 = countries.filter((country) => {
  return country.length == 6;
});

// console.log(lessThan6);

const moreThan6 = countries.filter((country) => {
  return country.length >= 6;
});

// console.log(moreThan6);

const startsWithE = countries.filter((country) => {
  return country.toLowerCase().startsWith("e");
});

// console.log(startsWithE);

const productsWithPrices = products.filter((product) => {
  if (typeof product.price == "number") {
    return product.product;
  }
});

// console.log(productsWithPrices);

function getStringLists(arr) {
  const newArr = [];
  arr.filter((item) => {
    if (typeof item == "string") {
      newArr.push(item);
    }
  });
  return newArr;
}

// console.log(getStringLists([1, 2, "abc", "test", 5]));

const lastItem = countries[countries.length - 1];
// countries.pop();
const concatCountries = countries.reduce((a, b) => {
  return `${a}, ${b}`;
});

// console.log(`${concatCountries} and ${lastItem}`);

// console.log(
//   countries.some((country) => {
//     return country.includes("land");
//   })
// );

const newNumbers = numbers.every((num) => {
  return typeof num === "number";
});

// console.log(newNumbers);

const namesLongerThan7 = names.some((name) => {
  return name.length > 7;
});

// console.log(namesLongerThan7);

const everyLand = countries.every((country) => {
  country.includes("land");
});

// console.log(everyLand);

const findLand = countries.find((country) => {
  return country.includes("land");
});
const findIndexLand = countries.findIndex((country) => {
  return country.includes("land");
});

// console.log(findLand);

// console.log(findIndexLand);

const find6LetterCountry = countries.find((country) => {
  return country.length == 6;
});

// console.log(find6LetterCountry);

const findPosition = countries.findIndex((country) => {
  return country.length == 6;
});

// console.log(findPosition);

const findNorway = countries.findIndex((country) => {
  return country == "Norway";
});

const findRussia = countries.findIndex((country) => {
  return country == "Russia";
});

console.log(findNorway);

console.log(findRussia);

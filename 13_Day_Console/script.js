const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

// console.table(countries);

// console.table(users);

// console.group("Users");
// console.log(users);
// console.groupEnd();
// console.group("Names");
// console.log(names);
// console.groupEnd();

// console.assert(100 > 2 * 10, "10 is not more than 20");

// console.warn("UWAGA");
// console.error("CRITICAL ERROR XXX");

let n = 0;
console.time("While");
while (n < 3) {
  n++;
  console.log(countries[n]);
}
console.timeEnd("While");

console.time("forEach");
countries.forEach((e) => {
  console.log(e);
});
console.timeEnd("forEach");

console.time("for");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
console.timeEnd("for");

console.time("do while");
for (country of countries) {
  console.log(country);
}
console.timeEnd("do while");

let skills = [
  { name: "HTML", level: 10 },
  { name: "CSS", level: 8 },
  { name: "JavaScript", level: 9 },
  { name: "React", level: 8 },
  { name: "Node", level: 7 },
];

let skillsJson = JSON.stringify(skills);
// localStorage.setItem("skills", skillsJson);

// let name = "Piotr Popiolek";
// let age = 22;
// let country = "Poland";
// let city = "Lublin";

// localStorage.setItem("name", name);
// localStorage.setItem("age:", age);
// localStorage.setItem("country:", country);
// localStorage.setItem("city:", city);

let student = {
  firstName: "Piotr",
  lastName: "Popiolek",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript", "Vue?"],
  country: "Poland",
  enrolled: {
    IT: "yes",
    Maths: "no",
    Physics: "yes",
  },
};

let studentJson = JSON.stringify(student, undefined, 2);
// localStorage.setItem("student", studentJson);

// console.log(localStorage);

const personAccount = {
  firstName: "Ebenezer",
  lastName: "Scrooge",
  incomes: {
    Landlording: 2900,
    SellingGuns: 15000,
  },
  expenses: {
    rent: 4000,
    food: 250,
  },
  totalIncome() {
    return Object.values(this.incomes).reduce((a, b) => {
      return a + b;
    }, 0);
  },
  totalExpense() {
    return Object.values(this.expenses).reduce((a, b) => {
      return a + b;
    }, 0);
  },
  addIncome(desc, value) {
    return (this.incomes[desc] = value);
  },
  addExpense(desc, value) {
    return (this.expenses[desc] = value);
  },
  accountInfo() {
    return `Hello ${this.firstName} ${this.lastName}. Your current balance is ${
      this.totalIncome() - this.totalExpense()
    }`;
  },
};

// console.log(`Your total income is ${personAccount.totalIncome()}`);
// console.log(`Your total expense is ${personAccount.totalExpense()}`);
// console.log(personAccount.addIncome("Woork", 3200));
// console.log(`Your total income is ${personAccount.totalIncome()}`);
// console.log(personAccount.addExpense("PS5", 1600));
// console.log(`Your total expense is ${personAccount.totalExpense()}`);
// console.log(personAccount.accountInfo());
// personAccount.addIncome("Work", 2700);
// let personAccountJSON = JSON.stringify(personAccount, undefined, 2);
// localStorage.setItem("person", personAccountJSON);

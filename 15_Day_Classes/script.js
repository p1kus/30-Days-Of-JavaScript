class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getFullAnimalInfo() {
    return `${this.name}, ${this.age}, ${this.color}, ${this.legs},`;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }
}

// const doggy = new Dog("Bary", "3", "Black", "4", "Kundel");
// const cat = new Animal("Wafel", "2", "Black and white", "4");

// console.log(doggy);
// console.log(cat);

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(data) {
    this.data = data;
  }
  count() {
    return this.data.length;
  }
  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  }
  min() {
    return Math.min(...this.data);
  }
  max() {
    return Math.max(...this.data);
  }
  range() {
    return Math.max(...this.data) - Math.min(...this.data);
  }
  mean() {
    return Math.round(this.sum() / this.data.length);
  }
  median() {
    let index = Math.floor(this.count() / 2);
    return Math.floor(
      (this.data[index - 1] + this.data[index] + this.data[index + 1]) / 3
    );
  }
  mode() {
    const valueObj = {};
    const mode = [];
    this.data.forEach((value) => {
      valueObj[value] = (valueObj[value] || 0) + 1;
      mode.push({
        mode: value,
        count: valueObj[value],
      });
    });
    mode.sort((a, b) => {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;
      return 0;
    });
    return mode[0];
  }
  var() {}
}

const statistics = new Statistics(ages);

// console.log("Count:", statistics.count()); // 25
// console.log("Sum: ", statistics.sum()); // 744
// console.log("Min: ", statistics.min()); // 24
// console.log("Max: ", statistics.max()); // 38
// console.log("Range: ", statistics.range()); // 14
// console.log("Mean: ", statistics.mean()); // 30
// console.log("Median: ", statistics.median()); // 29
// console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = new Set(incomes);
    this.expenses = new Set(expenses);
  }
  totalIncome() {
    return Object.keys(this.incomes).reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0);
  }
  totalExpense() {
    return Object.keys(this.expenses).reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0);
  }
  addIncome(income, desc) {
    this.incomes[income] = desc;
    console.log(this.incomes);
  }
  addExpense(expense, desc) {
    this.expenses[expense] = desc;
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
  accountInfo() {
    return `Hi ${
      this.firstName
    }! Your current balance is: ${this.accountBalance()}`;
  }
}

const maciej = new PersonAccount("Maciej", "R", [], []);

maciej.addIncome(3000, "Rent");
maciej.addIncome(32000, "Drugs");
maciej.addExpense(15000, "Car");

console.log("Total Income:", maciej.totalIncome());
console.log("Total Expenses:", maciej.totalExpense());
console.log("Info:", maciej.accountInfo());

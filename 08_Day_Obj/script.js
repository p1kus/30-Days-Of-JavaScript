// const person = {
//   firstName: "Piotr",
//   lastName: "Popiolek",
//   age: 250,
//   country: "Poland",
//   city: "Lublin",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   isMarried: true,
//   getName: function () {
//     return `${this.firstName}, ${this.lastName}`;
//   },
// };

// person.nationality = "Polish";
// person.skills.push("SASS");

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(",");
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0];
//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let statement = `Hi, my name ${this.firstName}. I know ${skills}`;
//   return statement;
// };

// console.log(person.getName());
// console.log(person.getPersonInfo());

// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);

// const keys = Object.entries(copyPerson);
// console.log(keys);

// const dog = {};

// console.log(dog);

// dog.name = "Barry";
// dog.legs = "short";
// dog.color = "Black and White";
// dog.bark = function () {
//   return `woof woof`;
// };
// dog.breed = "None";
// dog.getDogInfo = function () {
//   return `His name is ${this.name}, his legs are ${this.legs}. He's ${
//     this.color
//   }, and he goes ${this.bark()}`;
// };

// // console.log(Object.values(dog));
// console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: true,
    points: 40,
  },
};

const copyUsers = Object.assign({}, users);

copyUsers.Piotr = {
  email: "ppp123@gmail.com",
  skills: ["HTML", "CSS", "JS"],
  age: 22,
};

// console.log(copyUsers);

let winner;
let max = 0;
// console.log(users["Paul"].skills);
for (const property in users) {
  //   console.log(property);
  if (users[property].skills.length > max) {
    max = users[property].skills.length;
    winner = property;
  }
}
// console.log(winner);

let countScores = 0;
let countActive = 0;

for (const property in users) {
  if (users[property].points >= 50) {
    countScores += 1;
  }
  if (users[property].isLoggedIn == true) {
    countActive += 1;
  }
  // console.log(countScores);
  // console.log(countActive);
}
for (const property in users) {
  let skillList = users[property].skills;
  let mern = skillList.indexOf("MongoDB" && "Express" && "React" && "Node");
  if (mern !== -1) {
    // console.log(`MERN`);
    // console.log(property);
  }
}

// console.log(Object.keys(users));
// console.log(Object.values(users));

// import { countries } from "./countries_data.js";

// const values = Object.values(countries);
// for (let i = 0; i < values.length; i++) {
//   console.log(`${values[i].name}, ${values[i].capital}`);
// }

const personAccount = {
  firstName: "Ebenezer",
  lastName: "Scrooge",
  incomes: {
    debts: 9000,
    landlording: 2000,
  },
  expenses: {
    rent: 900,
    food: 900,
    books: 20,
    snacks: 500,
  },
  totalIncome: function () {
    const sum = Object.values(this.incomes);
    return sum.reduce((a, b) => a + b);
  },
  totalExpenses: function () {
    const sum = Object.values(this.expenses);
    return sum.reduce((a, b) => a + b);
  },
  accountInfo: function () {
    return `${this.firstName}, ${this.lastName}`;
  },
  addIncome: function (x) {
    return `Added to incomes: ${(this.incomes.begging = x)}`;
  },
  addExpense: function (x) {
    return `Added to expenses: ${(this.expenses.clothes = x)}`;
  },
  accountBalance: function () {
    return `Account balance: ${this.totalIncome() - this.totalExpenses()}`;
  },
};

// console.log(`${personAccount.addIncome(500)}`);
// console.log(`${personAccount.addExpense(5000)}`);
// console.log(`Total income: ${personAccount.totalIncome()}`);
// console.log(`Total expenses: ${personAccount.totalExpenses()}`);
// console.log(`Account Info: ${personAccount.accountInfo()}`);
// console.log(`${personAccount.accountBalance()}`);

const usersObj = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// console.log(usersObj);

function generateID() {
  let chars = "abcdefghijklmnopqrstuwyzx0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

function signUp(username, email, password) {
  const user = {
    _id: generateID(),
    username: username,
    email: email,
    password: password,
    createdAt: `Now`,
    isLoggedIn: true,
  };
  for (let i = 0; i < usersObj.length; i++) {
    if (
      usersObj[i].email.indexOf(user.email) !== -1 ||
      usersObj[i].username.indexOf(user.username) !== -1
    ) {
      console.log(`Account already exists`);
    } else if (i == usersObj.length - 1) {
      usersObj.push(user);
    }
  }
}
// signUp("Thomas", "pikus@gmail.com", "cyk123");
// // console.log(usersObj);

function signIn(username, password) {
  for (let i = 0; i < usersObj.length; i++) {
    if (
      usersObj[i].username.indexOf(username) !== -1 &&
      usersObj[i].password.indexOf(password) !== -1
    ) {
      usersObj[i].isLoggedIn = true;
      console.log(`You just logged in! Welcome ${usersObj[i].username}`);
      break;
    } else if (i == usersObj.length - 1) {
      console.log(`Account doesn't exist`);
    }
  }
}

// signIn("Martha", 123222);

// console.log(generateID());

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function rateProduct(user_id, product, rate) {
  const rating = {
    userId: user_id,
    rate: rate,
  };
  switch (product) {
    case "mobile phone":
      products[0].ratings.push(rating);
      break;
    case "Laptop":
      products[1].ratings.push(rating);
      break;
    case "TV":
      products[2].ratings.push(rating);
      break;
    default:
      break;
  }
}

// rateProduct("ghderc", "Laptop", 5);
// console.log(products[1]);
function getAverage(product) {
  let avg = 0;
  let count = 0;
  console.log(products[0].ratings);
  if (product == "mobile phone") {
    prod = 0;
  } else if (product == "Laptop") {
    prod = 1;
  } else if (product == "TV") {
    prod = 2;
  }
  for (rate in products[prod].ratings) {
    avg += products[prod].ratings[rate].rate;
    console.log(avg);
    count++;
  }
  return avg / count;
}

// console.log(getAverage("Laptop"));

function averageRating(product) {
  switch (product) {
    case "mobile phone":
      products[0].Object.values(ratings);
      break;
    case "Laptop":
      products[1];
      break;
    case "TV":
      products[2];
      break;
    default:
      break;
  }
}

function likeProduct(product) {
  let id = generateID();
  for (prod in products) {
    if (product.toLowerCase() == products[prod].name.toLowerCase()) {
      if (products[prod].likes.length == 0) {
        products[prod].likes.push(id);
        console.log(products[prod].likes);
        return `Added like!`;
      } else {
        products[prod].likes.pop(id);
        return `removed like!`;
      }
    } else {
      return `No product`;
    }
  }
}
// rateProduct();
// console.log(products);
console.log(likeProduct("Laptop"));

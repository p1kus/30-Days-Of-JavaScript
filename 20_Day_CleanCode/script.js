//OBJECT SPREAD INSTEAD OF OBJECT.ASSIGN TO COPY OBJECTS

const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

// console.log(copy);

//

//Object.hasOwn() to check if an object has a key instead of calling Object.prototype.hasOwnProperty.call()
// best
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.hasOwn(obj, "d")); // only supported in browsers that support ES2022

// /* or */
// import has from "has"; // https://www.npmjs.com/package/has
// console.log(has(object, key));
// /* or */
// console.log(Object.hasOwn(object, key)); // https://www.npmjs.com/package/object.hasown

//ARRAYS
// good
const items = [];

//USE ARRAY PUSH

// TO COPY ARRAYS USE SPREAD OPERATOR

// good
const itemsCopy = [...items];

//TO CONVERT ARRAY-LIKE OBJECTS TO ARRAYS USE SPREAD OPERATOR
// const foo = document.querySelectorAll(".foo");

// good
// const nodes = Array.from(foo);

// best
// const nodes = [...foo];

// USE ARRAY.FROM FOR CONVERTING ARRAY-LIKE OBJECTS TO ARRAYS
const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

// good
// const arr = Array.from(arrLike);

//USE ARRAY.FROM FOR CONVERTING MAPS AND SETS TO ARRAYS
const set = new Set([1, 2, 3, 4, 5]);
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const arrSet = Array.from(set);
const arrMap = Array.from(map);
console.log(arrSet);
console.log(arrMap);

//USE ARRAY.FROM FOR CONVERTING ITERABLES TO ARRAYS INSTEAD OF SPREAD OPERATOR BECAUSE IT AVOIDS CREATING INTERMEDIATE ARRAY

// good
const foo = new Set([1, 2, 3]);
const baz = Array.from(foo);

console.log(baz);

//USE RETURN STATEMENTS IN ARRAY METHOD CALLBACKS

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

// good
[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Mockingbird") {
    return author === "Harper Lee";
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Mockingbird") {
    return author === "Harper Lee";
  }

  return false;
});

//USE OBJECT DESTRUCTURING WHEN ACCESSING AND USING MULTIPLE PROPERTIES OF AN OBJECT

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

//USE ARRAY DESTRUCTURING

const arr = [1, 2, 3, 4];

// good
const [first, second] = arr;

//USE OBJECT DESTRUCTURING FOR MULTIPLE RETURN VALUES, NOT ARRAY DESTRUCTURING
//YOU CAN ADD NEW PROPERTIES OVERTIME WITHOUT CHANGING THE CALL SITES

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);

// bad
if (currentUser) {
  function test() {
    console.log("Nope.");
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log("Yup.");
  };
}

// NEVER USE ARGUMENTS, USE REST SYNTAX ...ARGS INSTEAD.
// REST ARGUMENTS ARE A REAL ARRAY, AND NOT ARRAY-LIKE LIKE ARGUMENTS

// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("");
}

// good
function concatenateAll(...args) {
  return args.join("");
}

// USE DEFAULT ARGUMENTS INSTEAD OF MODIFYING FUNCTION ARGUMENTS

// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}

//NEVER MUTATE PARAMETERS

// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
}

//NEVER REASSIGN PARAMETERS

// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) {
    a = 1;
  }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}

//PREFER THE SPREAD OPERATOR ... TO CALL VARIADIC FUNCTIONS
// bad
// const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// good
new Date(...[2016, 8, 5]);



//METHODS CAN RETURN THIS TO POINT AT OBJECTS

// bad
// Jedi.prototype.jump = function () {
//     this.jumping = true;
//     return true;
//   };
  
//   Jedi.prototype.setHeight = function (height) {
//     this.height = height;
//   };
  
//   const luke = new Jedi();
//   luke.jump(); // => true
//   luke.setHeight(20); // => undefined
  
  // good
  class Jedi {
    jump() {
      this.jumping = true;
      return this;
    }
  
    setHeight(height) {
      this.height = height;
      return this;
    }
  }
  
  const luke = new Jedi();
  
  luke.jump()
    .setHeight(20);


// Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.
// Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... 
// to iterate over arrays, and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects
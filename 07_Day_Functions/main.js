// const BMI = (weight, height) => {
//   let bmi = weight / Math.pow(height, 2);
//   console.log(bmi);
//   if (bmi >= 30) {
//     return `BMI is ${bmi}: Obese`;
//   } else if (bmi <= 29.9 && bmi >= 25) {
//     return `BMI is ${bmi}: Overweight`;
//   } else if (bmi <= 24.9 && bmi >= 18.5) {
//     return `BMI is ${bmi}: Normal Weight`;
//   } else {
//     return `BMI is ${bmi}: Underweight`;
//   }
// };

// console.log(BMI(63, 1.6));

// const QuadraticEquation = (a, b, c) => {
//   let x;
//   let delta = b * b - 4 * a * c;
//   let x1 = (-b - Math.sqrt(delta)) / (2 * a);
//   let x2 = (-b + Math.sqrt(delta)) / (2 * a);
//   if (delta > 0) {
//     return `X1: ${x1}, X2: ${x2}`;
//   } else if (delta == 0) {
//     return `X0: ${(-b / 2) * a}`;
//   } else {
//     return `No solutions`;
//   }
// };

// console.log(QuadraticEquation(1, 7, 12));

// const printArray = (array) => {
//   array.forEach((element) => {
//     return element;
//   });
// };

// console.log(printArray([`A`, `B`, `C`]));

// const swapValues = (x, y) => {
//   let swap = x;
//   x = y;
//   y = swap;
//   return `${x}, ${y}`;
// };

// console.log(swapValues(3, 2));

// const reverseArray = (array) => {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // newArray.unshift(array[i]);
//     newArray[array.length - i] = array[i];
//   }
//   newArray.shift();
//   return newArray;
// };

// console.log(reverseArray([`A`, `B`, `C`, `D`]));

// const capitalizeArray = (array) => {
//   let newArr = [];
//   array.map((e) => {
//     newArr.push(e.toUpperCase());
//   });
//   return newArr;
// };

// console.log(capitalizeArray([`abcd`, `tekst`, `fajny`]));

// const addItem = (item, ...items) => {
//   let array = [];
//   array.push(item, ...items);
//   return array;
// };

// console.log(addItem("abcbcd", "asdsd", "222"));

// const sumNumbers = (...numbers) => {
//   let arr = [];
//   arr.push(...numbers);
//   let resultArr = arr.reduce((a, b) => a + b);
//   return resultArr;
// };

// console.log(sumNumbers(1, 2, 3, 4));
// const capitalizeArray = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i];
//   }
// };

// const randomUserIp = () => {
//   let one = Math.floor(Math.random() * (266 - 0) + 0);
//   let two = Math.floor(Math.random() * (266 - 0) + 0);
//   let three = Math.floor(Math.random() * (266 - 0) + 0);
//   let four = Math.floor(Math.random() * (266 - 0) + 0);

//   return `${one}.${two}.${three}.${four}`;
// };

// console.log(randomUserIp());

// const idGeneratedByUser = (numOfChars, numOfIds) => {
//   const possible = `ABCDEFGHIJKLMNOPQRSTUWYZXabcdefghijklmnopqrstuwyzx~!@#$%^&*()+[]/1234567890=`;

//   let str = [];
//   for (let i = 0; i < numOfIds; i++) {
//     str[i] = "";
//     for (let j = 0; j < numOfChars; j++) {
//       str[i] += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//   }
//   // console.log(str);
//   return str;
// };
// console.log(idGeneratedByUser(3, 2));

const generateRGB = () => {
  let str = [];
  for (let i = 0; i < 3; i++) {
    let randomColor = Math.floor(Math.random() * (256 - 0));
    str.push(randomColor);
  }
  return `RGB:(${str})`;
};

// console.log(generateRGB());

const generateHexa = () => {
  let str = [];
  let chars = `abcdef123456789`;
  for (let i = 0; i <= 5; i++) {
    let randomHexa = chars.charAt(Math.floor(Math.random() * chars.length));
    str += randomHexa;
  }
  return `#${str}`;
};

// console.log(generateHexa());

const generateColors = (color, numOfColors) => {
  let res = [];
  if (color == `hexa`) {
    for (let i = 0; i < numOfColors; i++) {
      res.push(generateHexa());
    }
  } else if (color == `rgb`) {
    for (let i = 0; i < numOfColors; i++) {
      res.push(generateRGB());
    }
  }
  return res;
};

console.log(generateColors(`rgb`, 4));

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// console.log(shuffleArray(["Alfa Romeo", "BMW", "Audi", "Mercedes", "Toyota"]));

// let test = [1, 2, 3];

// for (let i = 0; i < test.length; i++) {
//   console.log(test[i].valueOf(1));
// }

const factorial = (n) => {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
};

// console.log(factorial(3));

const isEmpty = (check) => {
  console.log(check);
  check === undefined ? console.log(`Is empty`) : console.log(`iznt empty`);
};

// isEmpty();

const sum = (...args) => {
  let arr = [];
  arr.push(...args);
  let sum = arr.reduce((a, b) => a + b);
  return sum;
};

// console.log(sum(1, 2, 3));

const sumOfArray = (arr) => {
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return `Nie wszystkie itemy są numerem`;
    } else {
      res = arr.reduce((a, b) => a + b);
    }
  }
  return res;
};

// console.log(sumOfArray([1, 2, 3, "124", 5, 1]));

const average = (arr) => {
  let add = arr.reduce((a, b) => a + b);
  let avg = add / arr.length;
  return avg;
};

// console.log(average([5, 5, 5, 5, 6]));

const modifyArray = (arr) => {
  if (arr.length < 5) {
    return `Arr shorter than 5, cant change fifth element`;
  } else {
    let modifiedElement = arr[4].toUpperCase();
    arr[4] = modifiedElement;
    return arr;
  }
};

// console.log(
//   modifyArray([`polska`, `niemcy`, `rosja`, `gruzja`, `niemcy`, `usa`])
// );

const checkArrayUnique = (arr) => {
  let res;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] == arr[i + 1]);
    if (arr[i] == arr[i + 1]) {
      return `Not unique`;
    } else {
      res = `Unique`;
    }
  }
  return res;
};

// console.log(checkArrayUnique([3, 2, 1, 5, 7]));

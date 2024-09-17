let challenge = `30 Days of JavaScript`;

let chall2 = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`;

let m1 = "30 Days of";

let m2 = "JavaScript";

let pattern = /a/gi;

// console.log(challenge);

// console.log(challenge.length);

// console.log(challenge.toUpperCase());

// console.log(challenge.toLowerCase());

console.log(challenge.substring(3, 22));

console.log(challenge.slice(0, 3));

console.log(challenge.includes("Script"));

console.log(challenge.split(""));

console.log(challenge.split(" "));

console.log(chall2.split(","));

console.log(challenge.replace(`JavaScript`, "Python"));

console.log(challenge.charAt(14));

console.log(challenge.charCodeAt("11"));

console.log(challenge.indexOf("a"));

console.log(challenge.lastIndexOf("a"));

console.log(challenge.indexOf);

console.log(
  `You cannot end a sentence with because because because is a conjunction`.charAt(
    47
  )
);
console.log(
  `You cannot end a sentence with because because because is a conjunction`.indexOf(
    "because"
  )
);
console.log(
  `You cannot end a sentence with because because because is a conjunction`.lastIndexOf(
    "because"
  )
);
console.log(
  `You cannot end a sentence with because because because is a conjunction`.search(
    "because"
  )
);

console.log("   30 days of JavaScript".trim(""));

console.log(challenge.startsWith("3"));

console.log(challenge.endsWith("t"));

console.log(challenge.match(pattern));

console.log(m1.concat(" ", m2));

console.log(challenge.repeat(2));

console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up' by John Holmes`
);

console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love, charity and love are the same."`
);

console.log(typeof "10" == typeof "10");

console.log(Math.round(parseFloat("9.8")) == 10);

let p = "python";

let j = "jargon";

let pattern2 = /on/gi;

console.log(p.match(pattern2));
console.log(j.match(pattern2));

let rand = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log(rand);
// generate a random number between 50 and 100

console.log(`1 1 1 1 1 1\n2 1 2 4 8\n`);

console.log(
  `You cannot end a sentence with because because because is a conjunction`.substring()
); // Use substr to slice out the phrase because because because from the following:''

let love = `Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.`;

let regExx = /love/gi;

console.log(love.match(regExx).length);

let sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let regExxx = /[^a-zA-Z0-9 ]/g;
console.log(sentence.replace(regExxx, ""));

let txt = `He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month`;
let regEx = /\d+/g;

let array = txt.match(regEx);

let sum = array.reduce((a, b) => a + b, 0);

console.log(sum);

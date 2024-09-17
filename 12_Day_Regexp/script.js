const str = "Javascript learning is harddd";
let pattern = /learning/gi;

const euro =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

// let euroPattern = /\d+/g;
// console.log(
//   euro.match(euroPattern).reduce((a, b) => {
//     return parseInt(a) + parseInt(b);
//   })
// );

points = ["-12", "4", "-1", "-3", "0", "-4", "8"];
const pointsSorted = points.sort((a, b) => {
  return a - b;
});
let closestPointPattern = /^-\d+/gi;
let furthestPointPattern = /\d$/gi;
const aPoint = pointsSorted.toString().match(closestPointPattern);
const bPoint = pointsSorted.toString().match(furthestPointPattern);

console.log(bPoint - aPoint);

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const sort = (a, b) => {
  if (a.count > b.count) return -1;
  if (a.count < b.count) return 1;
  return 0;
};

const tenMostFrequentWords = (str, size) => {
  let result = [];
  let regexp = /\w+/gi;
  let words = str.match(regexp);
  let wordsSet = new Set(words);
  for (word of wordsSet) {
    const filtered = words.filter((w) => w == word);
    result.push({
      word: word,
      count: filtered.length,
    });
  }
  return result.sort(sort).slice(0, size);
};

// console.log(tenMostFrequentWords(paragraph, 5));

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (str, num) => {
  const result = [];
  let regexpClean = /[)(*&^%$#@!);]/gi;
  let regexp = /\w+/gi;
  let strClean = str.replace(regexpClean, "");
  let words = strClean.match(regexp);
  let wSet = new Set(words);
  for (word of wSet) {
    const filtered = words.filter((w) => w == word);
    result.push({
      word: word,
      count: filtered.length,
    });
  }
  return result.slice(0, num).sort((a, b) => {
    if (a.count > b.count) return -1;
    if (a.count < b.count) return 1;
    return 0;
  });
};

console.table(cleanText(sentence, 3));

let month = `FEBRuary`;
let year = 2004;

month = month.toLowerCase();

if (month == `january`) {
  console.log(`dzanuary ma 31 dni`);
} else if (month == `february` && year % 4 == 0) {
  console.log(`february ma 29 dni, rok przestepczy!`);
} else {
  console.log(`february ma 28 dni`);
}

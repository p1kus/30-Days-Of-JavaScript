const calc = () => {
  let numb = 0;
  const addOne = () => {
    numb++;
    return numb;
  };
  const subtractOne = () => {
    numb--;
    return numb;
  };
  return {
    addOne: addOne(),
    subtractOne: subtractOne(),
  };
};

const inner = calc();

inner.addOne;
console.log(inner.addOne);
console.log(inner.subtractOne);

const personAccount = () => {
  let firstName = "Ebenezer";
  let lastName = "Scrooge";
  let incomes = {
    amount: 500,
    desc: "Selling stuff",
  };
  let expenses = {
    amount: 150,
    desc: "Buying stuff",
  };
  totalIncomes = () => {
    return incomes;
  };
  totalExpenses = () => {
    return expenses;
  };
  return {
    totalIncomes: totalIncomes(),
    totalExpenses: totalExpenses(),
  };
};

const innerPA = personAccount();

console.log(innerPA.totalIncomes);
console.log(innerPA.totalExpenses);

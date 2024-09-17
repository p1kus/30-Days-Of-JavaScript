//Callback
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback("It did not go well", skills);
//   }, 2000);
// };

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// };

// doSomething(callback);
// const fetchCats = async () => {
//   try {
//     const res = await fetch(catsAPI);
//     const catName = await res.json();
//     catName.forEach((cat) => {
//       console.log(`Name: ${cat.name}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchCats();

const fetchCountries = async () => {
  try {
    const res = await fetch(countriesAPI);
    const countries = await res.json();
    // console.log(getLargestCountries(countries));
    console.log(getUsedLanguages(countries));
  } catch (error) {
    console.log(error);
  }
};

const getLargestCountries = (countries) => {
  let res = [];
  countries.forEach((country) => {
    res.push({
      name: country.name,
      pop: country.population,
    });
  });
  return res
    .sort((a, b) => {
      if (a.pop > b.pop) return -1;
      if (a.pop < b.pop) return 1;
      return 0;
    }, 0)
    .slice(0, 10);
};

const getUsedLanguages = (countries) => {
  let res = [];
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (res.indexOf(language.name) === -1) {
        res.push(language.name);
      }
    });
  });
  return res.length;
};

console.log(fetchCountries());

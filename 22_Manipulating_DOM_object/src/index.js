"use strict";
let API_URL = "https://restcountries.com/v3.1/all?fields=name";
let countryNames = [];
let container = document.querySelector(".container");
async function getData() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        data.forEach((country) => {
            countryNames.push(country.name["common"]);
            let box = document.createElement("div");
            box.classList.add("box");
            container.appendChild(box);
            box.innerHTML = `<p>${country.name["common"]}</p>`;
        });
        countryNames.sort();
    }
    catch (err) {
        console.error(`Error: ${err}`);
    }
    // countryNames.push(data.)
}
getData();

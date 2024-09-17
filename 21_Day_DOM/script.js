const allLi = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const h1 = document.querySelector("h1");
// const span = document.createElement("span");
// console.log(span);
console.log(h1);
// span.textContent = "2024";

const generateRandomHexColor = () => {
  const chars = "0123456789abcdef";
  let randomColor = "";
  for (let i = 0; i < 6; i++) {
    randomColor += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `#${randomColor}`;
};

// setInterval(() => {
//   h1.getElementsByTagName("span")[0].style.backgroundColor =
//     generateRandomHexColor();
// }, 1000);

setInterval(() => {
  h1.getElementsByTagName("span")[0].style.backgroundColor =
    generateRandomHexColor();
}, 1000);
setInterval(() => {
  h1.getElementsByTagName("span")[0].style.backgroundColor =
    generateRandomHexColor();
}, 1000);

console.log(generateRandomHexColor());

h1.innerHTML = `Piotr Popiolek challenges 30 days of JS, but in <span>2024!</span>`;

h1.getElementsByTagName("span")[0].style.padding = "10px";

console.log(allLi);

for (let li of allLi) {
  allLi[0].style.backgroundColor = "green";
  allLi[1].style.backgroundColor = "yellow";
  li.style.backgroundColor = "red";
  li.style.padding = "10px";
  li.style.width = "400px";
}

ul.style.listStyleType = "none";

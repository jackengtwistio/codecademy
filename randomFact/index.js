import { facts } from "./data.js";

let text = document.querySelector("p");
let button = document.querySelector("button");

function showAFact() {
  text.innerHTML = facts[Math.floor(Math.random() * facts.length)];
}
button.onclick = showAFact;

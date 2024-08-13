import {sumar,multiplicar} from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const select = document.querySelector("#operaciones-options");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedOption = select.value;
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  let result;

  if (selectedOption === "sumar") {
    result = sumar(firstNumber, secondNumber);
  } else if (selectedOption === "multiplicar") {
    result = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = "<p>" + result + "</p>";
});

//Manipular elementos html con js
const heading = document.querySelector("h1");

heading.textContent = "Un nuevo heading";
console.log(heading);

const enlaces = document.querySelectorAll(".navegacion a"); //array de todos los elementos
enlaces.forEach((enlace) => (enlace.textContent = "nuevo enlace"));

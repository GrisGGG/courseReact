//Eventos del DOM -CLICKS
const heading = document.querySelector("h1");
heading.addEventListener("click", () => {
  console.log("Diste click en Heading");
});

heading.addEventListener("click", clickHeading);

function clickHeading() {
  console.log("Diste click en Heading");
}

const enlaces = document.querySelectorAll(".navegacion a");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    console.log("diste click en un enlace");
  });
});

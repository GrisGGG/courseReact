//Eventos del DOM - INPUTS

const inputNombre = document.querySelector(".nombre");
inputNombre.addEventListener("input", (evt) => {
  console.log(evt.target.value);
});

const inputPassword = document.querySelector(".password");
inputPassword.addEventListener("input", funcionPassword);

function funcionPassword() {
  inputPassword.type = "text";

  setTimeout(() => {
    inputPassword.type = "password";
  }, 100);
}

//Eventos del DOM - Submit
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputNombre === "" || inputPassword === "") {
    console.log("Debes llenar los campos");
  } else {
    console.log("correcto, los datos están siendo enviados!");
  }
});

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputNombre = document.querySelector(".nombre");
  const inputPassword = document.querySelector(".password");

  const alertaPrevia = document.querySelector(".alerta");
  if (alertaPrevia) {
    alertaPrevia.remove;
  }

  const alerta = document.createElement("DIV");
  alerta.classList.add("alerta");

  if (inputNombre === "" || inputPassword === "") {
    alerta.textContent = "Debes llenar los campos";
    alerta.classList.add("error");
  } else {
    alerta.textContent = "correcto, los datos están siendo enviados!";
    alerta.classList.add("exito");
  }
  formulario.appendChild(alerta);
  console.log(alerta);
});

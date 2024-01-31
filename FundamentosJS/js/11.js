//Funciones
// sumar();
// function sumar() {
//   console.log(2 + 2);
// }
// sumar();
// sumar();

function restar(numero) {
  //paarametro
  console.log(numero);
}

restar(10); //argumento

function sumar(numero = 0, numero2 = 0) {
  return {
    resultado: numero + numero2,
    mensaje: "Hola Mundo",
  };
}

const { resultado, mensaje } = sumar(20, 40);
console.log(resultado);
console.log(mensaje);

//Condicionales

const disponible = 4000000000;
const retirar = 2000;

if (disponible > retirar) {
  //si la condición se cumple se ejecuta este código
  console.log("si puedes retirar");
} else {
  //si no se cumple se ejecuta este código
  console.log("no puedes retirar");
}

//Comparación y Operador Estricto
const numero1 = 20;
const numero2 = "20";

/**
 * = comparación simple
 * === comparación estricta tipo y valor son iguales
 */

if (numero1 === numero2) {
  console.log("Son iguales");
} else {
  console.log("no son iguales");
}

const autenticado = true;
if (autenticado) {
  console.log("Si esta autenticado");
}

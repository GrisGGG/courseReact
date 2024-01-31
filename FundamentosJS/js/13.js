//Funciones -Function Expression

//esto es lo mismo
const sumar = function (numero = 0, numero2 = 0) {
  console.log(numero + numero2);
};

//que esto
const sumar1 = (numero = 0, numero2 = 0) => {
  return numero + numero2;
};
//o esto
const sumar2 = (numero = 0, numero2 = 0) => numero + numero2;

//0 esto cuando sólo es un parámetro
const sumar3 = (numero) => numero + 50;

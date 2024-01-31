//Operador ternario

const autenticado = true;

//condición ? sí se cumple : sí no se cumple

autenticado
  ? console.log("usuario autenticado")
  : console.log("usuario no valido");

//Doble ternario
const saldo = 60000;
const pagar = 700;
const tarjeta = true;

saldo > pagar
  ? console.log("puedes pagar")
  : tarjeta
  ? console.log("puedes pagar con tarjeta")
  : console.log("no puedes pagar");

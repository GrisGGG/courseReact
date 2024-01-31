const saldo = 60000;
const pagar = 700;
const tarjeta = true;

// if (saldo > pagar) {
//   console.log("puedes pagar");
// } else if (tarjeta) {
//   console.log("pago con  targeta");
// } else {
//   console.log("no puedes pagaar");
// }

//OR - || - Una de las dos se debe cumplir
if (saldo > pagar || tarjeta) {
  console.log("puedes pagar");
} else {
  console.log("no puedes pagar");
}

//AND - && - las dos se deben cumplir
if (saldo > pagar && tarjeta) {
  console.log("puedes pagar");
} else {
  console.log("no puedes pagar");
}

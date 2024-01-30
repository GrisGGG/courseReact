/*ESTRUCTURAS Y TIPOS DE DATOS
Existen los :
Object
Null
Number
Big Int
Boolean
Function
String
Undefined
Symbol

Las variables al ser declaradas ya tienen un tipo
este es undefined, no hace falta inicializarlas.
*/

// Undefined
// let cliente;
// console.log(typeof cliente);

//Boolean true|false
let cliente = true;
console.log(typeof cliente);

//Number
/*Todos los números son tratados 
  como number */
const numer1 = 10.2;
const numer2 = 24;
const numer3 = -403;

console.log(typeof numer1);
console.log(typeof numer2);
console.log(typeof numer3);

//String o cadena de texto
const nombre = "Guadalupe";
const nombre1 = "Guadalupe";
const numeroString = "30";

console.log(typeof nombre);
console.log(typeof nombre1);
console.log(typeof numeroString);

//BigInt
const numeroGrande =
  BigInt(113943935930593039303059309530593050305305035035930935);
console.log(typeof numeroGrande);

const numero = 10;
const numero2 = 20;
// console.log(numero + numeroGrande); // error no se puede hacer operaciones entre este tipo de datps

//Symbol (aunque tengan el mismo valor son diferentes)
const primerSymbol = Symbol(20);
const segundoSymbol = Symbol(20);

console.log(primerSymbol === segundoSymbol); //false

//Objetos-Destructurin con 2 o más objetos
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Guadalupe",
  premium: true,
};

/**Sí queremos crear variables con los datos de los objetos
 * y estas propiedades tienen los mismos nombres, podemos crear
 * un alias y así no interfiere con los demás objetos
 */

const { nombre, precio, disponible } = producto;
const { nombre: nombreCliente, premium } = cliente;

console.log(nombre);
console.log(nombreCliente);

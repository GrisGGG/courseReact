//Objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

console.log(producto);

//acceder
console.log(producto.nombre);

//destructuring
const { imagen } = producto; // creamos la variable
const { nombre } = producto;

//object literal enhacement
const autenticado = true;
const usuario = "Jan";

const nuevoObjeto = {
  autenticado, //deben tener el mismo nombre
  usuario,
}; //sino

const otroObjeto = {
  autenticado1: autenticado,
  usuario1: usuario,
};

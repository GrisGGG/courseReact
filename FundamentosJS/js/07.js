//Unir 2 objetos
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Guadalupe",
  premium: true,
};

// const nuevoObjeto = Object.assign(producto, cliente) //no

const nuevoObjeto2 = {
  producto: { ...producto },
  cliente: { ...cliente },
};
/*Crea un nuevo objeto crea dos atributos y en estos coloca copias de los
objetos que queremos unir así ninguno se modificara y sus datos se convervarán */
console.log(nuevoObjeto2);
console.log(cliente);
console.log(producto);

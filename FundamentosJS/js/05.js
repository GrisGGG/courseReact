const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

//Objeto permite reescribir propiedades

producto.nombre = "Monitor Curvo";

//si no existe lo va a añadir
producto.imagen = "imagen.jpg";

//eliminar
delete producto.disponible;

//si eliminamos algo que no existe no pasaa nada
delete producto.prioridad;
console.log(producto);

//para proteger de cambios a los objetos

//Object.freeze(producto) no deja pasar ningun cambio
Object.seal(producto); //Solo deja modificar algun atributo ya disponible, mas no agregar o quitar nada

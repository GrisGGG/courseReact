//Arrays o Arreglos
const tecnologias = ["html", "css", "react", "Javascript", "node"];

//acceder
console.log(tecnologias[2]);

//manipulaciopn de arrays

//Añadir elementos
// tecnologias.push('graphQl') //Añade al final del array
// tecnologias.unshift('graphQL')//añade al inicio del array

/**ESOS MÉTODOS MODIFICAN AL ARRAY LO ADECUADO ES LO SIGUIENTE */

const nuevoArreglo = [...tecnologias, "GraphQl"]; //añade al final
const nuevoArreglo1 = ["GraphQl", ...tecnologias]; // añade al inicio

// Eliminar elementos del array
// tecnologias.pop();//Elimina del final
// tecnologias.shift(); //Elimina del principio
// tecnologias.splice(2, 1); //elimina una pocision especifica

/**Con react es mejor usar algo así */

const nuevoArray = tecnologias.filter(function (tech) {
  return tech !== "html";
});

//modificar un elemento

const nuevoArray1 = tecnologias.map(function (tech) {
  if (tech === "html") {
    return "GraphQL";
  } else {
    return tech;
  }
});

console.log(tecnologias);
console.log(nuevoArreglo1);
console.log(nuevoArray);
console.log(nuevoArray1);

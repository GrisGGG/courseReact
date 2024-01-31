const tecnologias = ["html", "css", "react", "Javascript", "node"];
const numeros = [10, 20, 30];
let nuevoArray;

//filter
nuevoArray = tecnologias.filter((tech) => tech !== "react");

//INCLUDES Comprobar si un elemento existe
const resultado = tecnologias.includes("graphql");

//Some - Devuelve sí al menos uno cumple la condición
const resultado1 = tecnologias.some((numero) => numero < 15);

//Find - Devuelve el primer elemento que cumpla la condición
const resultado2 = tecnologias.find((numero) => numero > 5);

//Every - True o False sí todos cumplen la condición
const resultado3 = tecnologias.every((numero) => numero > 0);

//Reduce - Acumulado en el total numero más el total iniciando de cero puede iniciar con 100 o lo que sea
const resultado4 = tecnologias.reduce((total, numero) => numero + total, 0);

//Filter -Crea un nuevo array en base a una condición
const resultado5 = tecnologias.filter((tech) => tech !== "react");
const resultado6 = numeros.filter((numero) => numero > 15);

tecnologias.forEach((tech, index) => console.log(index));
tecnologias.map((tech) => tech);

console.log(nuevoArray);
console.log(resultado6);

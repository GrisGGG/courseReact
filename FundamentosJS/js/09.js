//destructuring de arrays
const tecnologias = ["html", "css", "react", "Javascript", "node"];

const [var1, var2, var3, var4, var5] = tecnologias;

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

/**para no crear tantas varianles hasta encontrar la que se reqioere se ponen comas */

const [, , , , var6] = tecnologias;

console.log(var6);

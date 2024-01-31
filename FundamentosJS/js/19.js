//Scope

const precio = 300; //variable global

function unaFuncion() {
  const precio = 600; // variable de bloque
  console.log(precio);
}

if (true) {
  console.log(precio); //300
}

console.log(precio); //300
unaFuncion(); //600

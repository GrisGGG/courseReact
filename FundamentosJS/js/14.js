//Array Function - Array Methods

const tecnologias = ["html", "css", "react", "Javascript", "node"];

const nuevoArray1 = tecnologias.map((tech) => {
  if (tech === "html") {
    return "GraphQL";
  } else {
    return tech;
  }
});

const nuevoArray2 = tecnologias.filter((tech) => tech !== "react");

console.log(nuevoArray2);

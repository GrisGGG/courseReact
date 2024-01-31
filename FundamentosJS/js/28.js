//Fetch API - Async Await(multiples llamados)

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";
const consultarAPI = async () => {
  /**Mal performance hasta que la primera este completa
   * la segunda inicia y se ve como un desface de información
   */
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  console.log(resultado);
  console.log("iniciando 2da consulta");

  const respuesta2 = await fetch(url2);
  const resultado2 = await respuesta2.json();
  console.log(resultado2);
};
consultarAPI();

/**lo ideal llamar y esperar a que ambas esten listas */
const consultarAPI2 = async () => {
  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]);
  const resultado = respuesta.json();
  const resultado2 = respuesta.json();
  console.log(resultado);
  console.log(resultado2);
};
consultarAPI2;

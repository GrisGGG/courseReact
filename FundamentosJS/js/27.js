//Fetch API - Async Await

//fetch API

const url = "https://jsonplaceholder.typicode.com/comments";
const consultarAPI = () => {
  fetch(url).then((respuesta) =>
    respuesta.json().then((resultado) => {
      resultado.forEach((comentario) => {
        console.log(comentario);
      });
    })
  );
};
consultarAPI();

const consultarAPI1 = async () => {
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
};
consultarAPI1();

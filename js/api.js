const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";

//Le pide los personajes a la API y le devuelve la lista
async function obtenerPersonajes() {
  const respuesta = await fetch(URL_PERSONAJES);

  //Revisa si la API respondió bien, tipo que no sea un error o algo así
  if (!respuesta.ok) {
    throw new Error("La API respondió con el error " + respuesta.status);
  }

  const datos = await respuesta.json();

  //Esto lo que hace es revisar que la respuesta sí traiga la lista de personajes
  if (!Array.isArray(datos.results)) {
    throw new Error("La respuesta no trae la lista de personajes");
  }

  return datos.results;
}

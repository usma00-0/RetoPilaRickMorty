//Esto convierte cada dato de la API en un Personaje y lo mete en la pila
function apilarPersonajes(lista, pila) {
  for (let i = 0; i < lista.length; i++) {
    const dato = lista[i];
    const personaje = new Personaje(dato.name, dato.gender, dato.species, dato.status);
    pila.push(personaje);
  }
}

//Saca los personajes uno seguido a otro y los muestra en la consola
function vaciarPila(pila) {
  while (!pila.isEmpty()) {
    const personaje = pila.pop();
    console.log(personaje);
  }
}

//Esta es la función principal que une todos los pasos
async function iniciar() {
  try {
    const lista = await obtenerPersonajes();
    const pila = new Pila();

    apilarPersonajes(lista, pila);
    console.log("Personaje en la cima:", pila.peek().name);

    vaciarPila(pila);
    console.log("¿La pila quedó vacía?", pila.isEmpty());
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}

iniciar();

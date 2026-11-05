//La pila significa que el último que entra es el primero que sale
class Pila {
  constructor() {
    this.elementos = []; //Acá se guardan los datos
    this.tamano = 0;     //Acá se ven cuántos datos hay en la pila
  }

  //Esto pone un dato encima de la pila
  push(dato) {
    this.elementos[this.tamano] = dato;
    this.tamano = this.tamano + 1;
  }

  //Esto saca el dato de encima y lo devuelve
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.tamano = this.tamano - 1;
    const dato = this.elementos[this.tamano];
    this.elementos[this.tamano] = undefined;
    return dato;
  }

  //Esto muestra el dato de encima sin sacarlo
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elementos[this.tamano - 1];
  }

  //Esto dice si la pila está vacía (bota un true) o si no (tira false)
  isEmpty() {
    return this.tamano === 0;
  }
}

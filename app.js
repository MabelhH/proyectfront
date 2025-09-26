function busquedaLineal(arreglo, elementoBuscado) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === elementoBuscado) {
      return i;  // devuelve el índice si encuentra el elemento
    }
  }
  return -1; // devuelve -1 si no encuentra el elemento
}

const arreglo = [10, 5, 3, 8, 2, 6, 11];
const elementoBuscado = 2;

const indice = busquedaLineal(arreglo, elementoBuscado);
console.log(`El elemento: ${elementoBuscado} se encuentra en el índice: ${indice}`);

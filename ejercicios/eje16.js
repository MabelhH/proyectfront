let suma = 0;
let i = 1;

for (let num = 1; num <= 50; num++) {
  if (num % 2 !== 0) { // solo impares
    suma += num;

    // Verificamos si la suma ya superó 500
    while (suma > 500) {
      console.log("La suma superó 500. Deteniendo el proceso.");
      console.log("Último número sumado:", num);
      console.log("Suma total:", suma);
      process.exit(); // termina el programa
    }
  }
}

console.log("Suma final de impares entre 1 y 50:", suma);

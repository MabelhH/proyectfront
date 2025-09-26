const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa números separados por coma: ", (input) => {
  const numeros = input.split(",").map(str => Number(str.trim()));

  if (numeros.some(isNaN)) {
    console.error("Error: Ingresa solo números válidos.");
  } else {
    const index = numeros.findIndex(num => num % 5 === 0);

    if (index !== -1) {
      console.log(`El primer múltiplo de 5 está en la posición: ${index}`);
      console.log(`Número: ${numeros[index]}`);
    } else {
      console.log("No se encontró ningún múltiplo de 5 en el array.");
    }
  }

  rl.close();
});

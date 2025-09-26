const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarPares(numeros) {
  return numeros.filter(num => num % 2 === 0).length;
}

rl.question("Ingresa números separados por coma: ", (input) => {
  const numeros = input.split(",").map(str => Number(str.trim()));

  if (numeros.some(isNaN)) {
    console.error("Error: Ingresa solo números válidos.");
  } else {
    const totalNumeros = numeros.length;
    const totalPares = contarPares(numeros);

    console.log("Cantidad total de números:", totalNumeros);
    console.log("Cantidad de números pares:", totalPares);
  }

  rl.close();
});

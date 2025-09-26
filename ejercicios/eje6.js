const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function invertirArray(arr) {
  const resultado = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    resultado.push(arr[i]);
  }
  return resultado;
}

rl.question("Ingresa números separados por coma: ", (input) => {
  const numeros = input.split(",").map(str => Number(str.trim()));

  if (numeros.some(isNaN)) {
    console.error("Error: Ingresa solo números válidos.");
  } else {
    console.log("Array original:", numeros);
    const invertido = invertirArray(numeros);
    console.log("Array invertido:", invertido);
  }

  rl.close();
});

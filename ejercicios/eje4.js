const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ordenarArray(numeros) {
  const arr = [...numeros];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

rl.question("Ingresa números separados por coma: ", (input) => {
  const numeros = input.split(",").map(str => Number(str.trim()));

  if (numeros.some(isNaN)) {
    console.error("Error: Ingresa solo números válidos.");
  } else {
    console.log("Array original:", numeros);
    const ordenados = ordenarArray(numeros);
    console.log("Array ordenado:", ordenados);
  }

  rl.close();
});

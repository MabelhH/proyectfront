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
    const positivos = numeros.filter(num => num >= 0);
    const negativos = numeros.filter(num => num < 0);
    const sumaPositivos = positivos.reduce((acc, num) => acc + num, 0);

    console.log("Números positivos:", positivos);
    console.log("Números negativos:", negativos);
    console.log("Suma de positivos:", sumaPositivos);
  }

  rl.close();
});

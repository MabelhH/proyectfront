const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumarArray() {
  rl.question("Ingresa números separados por coma: ", (input) => {
    let numeros = input.split(",").map(str => Number(str.trim()));

    if (numeros.some(isNaN)) {
      console.error("Error: Ingresa solo números válidos.");
    } else {
      let suma = numeros.reduce((acc, num) => acc + num, 0);
      console.log("La suma es: " + suma);
    }

    rl.close();
  });
}

sumarArray();

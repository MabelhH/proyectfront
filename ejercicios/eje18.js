const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let suma = 0;

function pedirNumero() {
  rl.question("Ingresa un número (0 para salir): ", (input) => {
    const num = Number(input.trim());
    if (isNaN(num)) {
      console.log(" Ingresa un número válido.");
      pedirNumero();
    } else if (num === 0) {
      console.log(" Suma total:", suma);
      rl.close();
    } else {
      suma += num;
      pedirNumero();
    }
  });
}

pedirNumero();

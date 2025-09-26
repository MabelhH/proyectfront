const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumero(callback) {
  rl.question("Ingresa un número mayor que 0: ", (input) => {
    const num = Number(input.trim());
    callback(num);
  });
}

function validarNumero() {
  let num;
  do {
    pedirNumero((n) => {
      num = n;
      if (isNaN(num) || num <= 0) {
        console.log("Número inválido. Intenta de nuevo.");
        validarNumero(); // vuelve a pedir
      } else {
        console.log(`Número válido ingresado: ${num}`);
        rl.close();
      }
    });
    return; // para evitar ciclo infinito
  } while (num <= 0 || isNaN(num));
}

validarNumero();

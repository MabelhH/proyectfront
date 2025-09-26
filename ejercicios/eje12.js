const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function pedirAdivinar() {
  rl.question("Adivina el número entre 1 y 10: ", (input) => {
    const intento = Number(input.trim());

    if (isNaN(intento)) {
      console.log("Por favor, ingresa un número válido.");
      pedirAdivinar();
    } else if (intento === numeroSecreto) {
      console.log("¡Felicidades! Adivinaste el número.");
      rl.close();
    } else {
      console.log("Incorrecto, intenta de nuevo.");
      pedirAdivinar();
    }
  });
}

pedirAdivinar();

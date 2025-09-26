const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número para ver su tabla de multiplicar: ", (input) => {
  const num = Number(input.trim());

  if (isNaN(num)) {
    console.error("Por favor, ingresa un número válido.");
  } else {
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }

  rl.close();
});

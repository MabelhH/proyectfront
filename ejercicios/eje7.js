const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa nombres separados por coma: ", (input) => {
  const nombres = input.split(",").map(nombre => nombre.trim());

  const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());

  console.log("Nombres en mayúsculas:", nombresMayusculas);

  rl.close();
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa nombres separados por coma: ", (inputNombres) => {
  const nombres = inputNombres.split(",").map(n => n.trim());

  rl.question("Ingresa el nombre a buscar: ", (nombreBuscar) => {
    // Buscamos el índice ignorando mayúsculas/minúsculas
    const index = nombres.findIndex(
      n => n.toLowerCase() === nombreBuscar.trim().toLowerCase()
    );

    if (index !== -1) {
      console.log(`El nombre "${nombreBuscar}" está en la posición: ${index}`);
    } else {
      console.log(`El nombre "${nombreBuscar}" NO se encontró en la lista.`);
    }

    rl.close();
  });
});

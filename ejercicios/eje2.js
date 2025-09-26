const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerMayorYMenor(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("Debes proporcionar un arreglo de números no vacío.");
  }

  let mayor = Math.max(...numeros);
  let menor = Math.min(...numeros);

  return { mayor, menor };
}

rl.question("Ingresa números separados por coma: ", (input) => {
  const numeros = input.split(",").map(str => Number(str.trim()));

  if (numeros.some(isNaN)) {
    console.error("Error: Asegúrate de ingresar solo números válidos.");
  } else {
    const { mayor, menor } = obtenerMayorYMenor(numeros);
    console.log("El número mayor es:", mayor);
    console.log("El número menor es:", menor);
  }

  rl.close();
});

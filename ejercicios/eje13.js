const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número para la cuenta regresiva: ", (input) => {
  let num = Number(input.trim());

  if (isNaN(num) || num < 0) {
    console.error("Por favor, ingresa un número válido mayor o igual a 0.");
    rl.close();
    return;
  }

  console.log(`Cuenta regresiva desde ${num}:`);
  while (num >= 0) {
    console.log(num);
    num--;
  }

  rl.close();
});

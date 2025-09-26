const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contraseñaCorrecta = "1234";
let intentos = 0;

function pedirLogin() {
  rl.question("Ingresa la contraseña: ", (input) => {
    intentos++;
    if (input === contraseñaCorrecta) {
      console.log("Acceso concedido.");
      rl.close();
    } else if (intentos >= 3) {
      console.log(" Acceso denegado. Demasiados intentos.");
      rl.close();
    } else {
      console.log(` Contraseña incorrecta. Intento ${intentos}/3\n`);
      pedirLogin(); // Reintentar
    }
  });
}

pedirLogin();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n--- Menú ---");
  console.log("1. Saludar");
  console.log("2. Mostrar fecha");
  console.log("3. Salir");
}

function pedirOpcion() {
  mostrarMenu();

  rl.question("Elige una opción: ", (input) => {
    const opcion = input.trim();

    switch (opcion) {
      case "1":
        console.log("¡Hola! ¿Cómo estás?");
        repetirMenu();
        break;
      case "2":
        console.log("Fecha actual:", new Date().toLocaleString());
        repetirMenu();
        break;
      case "3":
        console.log("Saliendo... ¡Hasta luego!");
        rl.close();
        break;
      default:
        console.log("Opción inválida, intenta de nuevo.");
        repetirMenu();
    }
  });
}

function repetirMenu() {
  // Simula el do...while llamando de nuevo a pedirOpcion
  pedirOpcion();
}

pedirOpcion();

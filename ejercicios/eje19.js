let a = 0;
let b = 1;

console.log("🔢 Serie de Fibonacci hasta que supere 100:");

while (a <= 100) {
  console.log(a);
  const temp = a + b;
  a = b;
  b = temp;
}

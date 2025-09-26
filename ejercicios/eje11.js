// Primeros 10 números de Fibonacci con for

let fib = [0, 1]; // Los dos primeros números

for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("Los primeros 10 números de Fibonacci son:");
console.log(fib);

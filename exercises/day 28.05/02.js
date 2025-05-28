const read = require("readline-sync");

let number, evenNumber = 0, oddNumber = 0;

for (let i = 1; i <= 10; i++) {
  number = read.question(`Digite o ${i}º número: `);
  number % 2 === 0? evenNumber++ : oddNumber++
}

console.log(`Total de números pares: ${evenNumber} | Total de números ímpares: ${oddNumber}`);
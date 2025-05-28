const read = require("readline-sync");

let age, youngAge = 0, oldAge = 0;

while (true) {
  age = read.questionInt("Digite uma idade: ");

  if (age < 0) break;
  if (age < 21) youngAge++
  if (age > 50) oldAge++
}

console.log(`Total de pessoas menores de 21 anos: ${youngAge} | Total de pessoas maiores de 50 anos: ${oldAge}`);
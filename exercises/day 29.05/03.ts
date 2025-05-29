const read3 = require("readline-sync");
let mySet: Set<number> = new Set<number>();

let inputNumberInt:number;

for (let i = 1; i <= 10; i++) {
  inputNumberInt = read3.question(`Digite o ${i}º número de 10: `);
  mySet.add(inputNumberInt);
}

console.log(`Listar dados do Set: ${[...mySet].sort((a, b) => a - b)}`);
import read from 'readline-sync';

const data: Set<number> = new Set<number>();
let inputNumber:number;

for (let i = 1; i <= 10; i++) {
  inputNumber = read.questionInt(`Digite o ${i}º número de 10: `);
  data.add(inputNumber);
}

console.log(`Listar dados do Set: ${[...data].sort((a, b) => a - b)}`);
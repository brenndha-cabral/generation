import read from 'readline-sync';

const data: Array<string> = new Array<string>();
let inputColor:string;

for (let i = 1; i <= 5; i++) {
  inputColor = read.question(`Digite o ${i}º cor: `);
  data.push(inputColor);
}

console.log(`Cores inseridas: ${data} | Cores inseridas ordenadas: ${data.sort()}`);
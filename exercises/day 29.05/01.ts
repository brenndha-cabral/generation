const read = require("readline-sync");
const colors: Array<string> = new Array<string>;

let inputColor:string;

for (let i = 1; i <= 5; i++) {
  inputColor = read.question(`Digite o ${i}º cor: `);
  colors.push(inputColor);
}

console.log(`Cores inseridas: ${colors} | Cores inseridas ordenadas: ${colors.sort()}`);
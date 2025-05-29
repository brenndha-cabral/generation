const read2 = require("readline-sync");
const data: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

let inputNumber:number, positionNumber:number;

inputNumber = read2.questionInt("Digite o número que você deseja encontrar: ");
positionNumber = data.indexOf(inputNumber);

if (positionNumber >= 0) {
  console.log(`O número ${inputNumber} está localizado na posição ${positionNumber}`);
} else {
  console.log(`O número ${inputNumber} não foi encontrado!`);
}
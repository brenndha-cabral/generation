const read4 = require("readline-sync");
let mySet2: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let inputNumberInt2:number, positionNumber2:boolean;

inputNumberInt2 = read4.questionInt("Digite o número que você deseja encontrar: ");
positionNumber2 = mySet2.has(inputNumberInt2);

if (positionNumber2) {
  console.log(`O número ${inputNumberInt2} foi encontrado!`);
} else {
  console.log(`O número ${inputNumberInt2} não foi encontrado!`);
}
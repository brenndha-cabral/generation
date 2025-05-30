import read from 'readline-sync';

const data:Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);
let inputNumberInt2:number, positionNumber2:boolean;

inputNumberInt2 = read.questionInt("Digite o número que você deseja encontrar: ");
positionNumber2 = data.has(inputNumberInt2);

if (positionNumber2) {
  console.log(`O número ${inputNumberInt2} foi encontrado!`);
} else {
  console.log(`O número ${inputNumberInt2} não foi encontrado!`);
}
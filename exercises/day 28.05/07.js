const read = require("readline-sync");

let data = [2,5,1,3,4,9,7,8,10,6];

let inputNumber, number, positionNumber;

inputNumber = read.questionInt("Digite o número que você deseja encontrar: ");

number = data.find(number => number === inputNumber);
positionNumber = data.indexOf(number);

if (positionNumber >= 0) {
  console.log(`O número ${inputNumber} está localizado na posição ${positionNumber}`);
} else {
  console.log(`O número ${inputNumber} não foi encontrado!`);
}

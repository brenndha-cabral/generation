const read = require("readline-sync");

let positiveNumbers = 0, inputNumber;

do { 
    inputNumber = read.questionInt("\nDigite um número inteiro: ");
    inputNumber >= 0 && (positiveNumbers = positiveNumbers + inputNumber);
}while (inputNumber);

console.log(`A soma dos números positivos é: ${positiveNumbers}`);
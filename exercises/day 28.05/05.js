const read = require("readline-sync");

let positiveNumbers = 0, inputNumber = 0;

do {
    
    inputNumber = read.questionInt("\nDigite um numero inteiro: ");

    inputNumber >= 0 && (positiveNumbers = positiveNumbers + inputNumber);

}while (inputNumber);

console.log(`A soma dos números positivos é: ${positiveNumbers}`);
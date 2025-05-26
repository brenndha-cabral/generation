const read = require('readline-sync');

let number1;
let number2;
let number3;
let number4;
let result;

number1 = parseFloat(read.question("\nDigite o primeiro número: "));
number2 = parseFloat(read.question("\nDigite o segundo número: "));
number3 = parseFloat(read.question("\nDigite o terceiro número: "));
number4 = parseFloat(read.question("\nDigite o quarto número: "));

result = ((number1*number2)-(number3*number4)).toFixed(2);

console.log(`A diferença é: ${result}`);
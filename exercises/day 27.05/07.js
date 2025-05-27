const read = require('readline-sync');

let number1;
let number2;
let inputOperation;

number1 = parseFloat(read.question("\nDigite o 1º número: "));
number2 = parseFloat(read.question("\nDigite o 2º número: "));
inputOperation = parseInt(read.question("\nDigite o tipo da operação (1: Soma | 2: Subtração | 3: Multiplicação | 4: Divisão): "));

const data = [
    { code: 1, operation: "Soma" },
    { code: 2, operation: "Subtração" },
    { code: 3, operation: "Multiplicação" },
    { code: 4, operation: "Divisão" },
];

let operation = data.find(o => o.code === inputOperation);

if (!operation) {
    console.log("Operação Inválida!");
} else {
    switch (operation.code) {
    case 1:
        console.log(`O resultado de ${number1} + ${number2} é = ${number1 + number2}`);
        break;
    case 2:
        console.log(`O resultado de ${number1} - ${number2} é = ${number1 - number2}`);
        break;
    case 3:
        console.log(`O resultado de ${number1} * ${number2} é = ${number1 * number2}`);
        break;
    case 4:
        console.log(`O resultado de ${number1} / ${number2} é = ${number1 / number2}`);
        break;
    }
}

    

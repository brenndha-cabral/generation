const read = require('readline-sync');

let numberA;
let numberB;
let numberC;

numberA = parseInt(read.question("\nDigite o número A: "));
numberB = parseInt(read.question("\nDigite o número B: "));
numberC = parseInt(read.question("\nDigite o número C: "));

if ((numberA + numberB) > numberC) {
    console.log("A soma de A + B é maior do que C") 
} else if ((numberA + numberB) < numberC) {
    console.log("A soma de A + B é menor do que C") 
} else {
    console.log("A soma de A + B é igual a C") 
}
    

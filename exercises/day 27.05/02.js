const read = require('readline-sync');

let number;

number = parseInt(read.question("\nDigite um número: "));

if ((number % 2 === 0) && number > 0) {
    console.log(`O número ${number} é par e positivo!`) 
} else if ((number % 2 === 0) && number < 0) {
    console.log(`O número ${number} é par e negativo!`) 
} else if ((number % 2 !== 0) && number > 0) {
    console.log(`O número ${number} é ímpar e positivo!`) 
} else {
    console.log(`O número ${number} é ímpar e negativo!`) 
}
    

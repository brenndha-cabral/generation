const read = require('readline-sync');

let name;
let age;
let firstDonation;

name = read.question("\nDigite o nome do doador: ");
age = parseInt(read.question("\nDigite a idade do doador: "));
firstDonation = Boolean(read.question("\nPrimeira doação de sangue? (digite true para sim e false para não): ")) === "true";

if ((age >= 60 && age <= 69) && firstDonation === false) {
    console.log(`${name} está apto(a) para doar sangue!`)

} else if ((age >= 60 && age <= 69) && firstDonation === true) {
    console.log(`${name} não está apto(a) para doar sangue!`)

} else if (age >= 18 && age < 60) {
    console.log(`${name} está apto(a) para doar sangue!`)

} else {
    console.log(`${name} não está apto(a) para doar sangue!`)
}
    
